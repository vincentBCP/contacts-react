import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import './App.css';

import { useSelector, useDispatch } from 'react-redux';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Tooltip
} from '@material-ui/core';
import {
    Add as AddIcon,
    Edit as EditIcon,
    Delete as DeleteIcon
}
from '@material-ui/icons';

import ContactFormModal from './ContactFormModal';

import Contact from './models/Contact';

import {
    addContact,
    updateContact,
    deleteContact
} from './store/app.reducer';

const App: React.FC = props => {
    const dispatch = useDispatch();
    const [openForm, setOpenForm] = React.useState(false);
    const [selectedRecord, setSelectedRecord] = React.useState<Contact | null>(null);
    
    const contactList: Contact[] = useSelector((state: any) => state.app.contacts);

    const handleFormSubmit = (data: any) => {
        if (selectedRecord) {
            dispatch(
                updateContact({
                    ...selectedRecord,
                    ...data
                } as Contact)
            );

            setOpenForm(false);

            return;
        }

        dispatch(
            addContact({
                id: uuidv4(),
                ...data
            } as Contact)
        );

        setOpenForm(false);
    }

    const handleDelete = (id: string) => {
        dispatch(deleteContact(id));
    }

    return (
        <React.Fragment>
            <ContactFormModal
                open={openForm}
                contact={selectedRecord}
                handleSubmit={handleFormSubmit}
                handleCancel={() => setOpenForm(false)}
            />

            <div className="App">
                <h1>Contacts</h1>
                <div>
                    <Tooltip title="Add new contact">
                        <IconButton
                            onClick={() => {
                                setSelectedRecord(null);
                                setOpenForm(true)
                            }}
                        >
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>Middle Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Mobile Number</TableCell>
                                <TableCell>Email Address</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                contactList.map(contact =>
                                    <TableRow key={contact.id}>
                                        <TableCell>{contact.firstName}</TableCell>
                                        <TableCell>{contact.middleName}</TableCell>
                                        <TableCell>{contact.lastName}</TableCell>
                                        <TableCell>{contact.mobileNumber}</TableCell>
                                        <TableCell>{contact.emailAddress}</TableCell>
                                        <TableCell align="right">
                                            <IconButton
                                                onClick={() => {
                                                    setSelectedRecord(contact);
                                                    setOpenForm(true);
                                                }}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => handleDelete(contact.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                {
                    !contactList || contactList.length < 1 ?
                    <p>No contact(s).</p> :
                    null
                }
            </div>
        </React.Fragment>
    )
}

export default App;
