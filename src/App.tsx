import React from 'react';

import './App.css';

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

function App() {
    return (
        <div className="App">
            <h1>Contacts</h1>
            <div>
                <Tooltip title="Add new contact">
                    <IconButton>
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
                        <TableRow>
                            <TableCell>Jedd</TableCell>
                            <TableCell></TableCell>
                            <TableCell>Gordon</TableCell>
                            <TableCell>09123456789</TableCell>
                            <TableCell>jedd.gordon.com</TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Aarron</TableCell>
                            <TableCell></TableCell>
                            <TableCell>Moss</TableCell>
                            <TableCell>09123456789</TableCell>
                            <TableCell>aarron.moss@email.com</TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Marina</TableCell>
                            <TableCell></TableCell>
                            <TableCell>Crouch</TableCell>
                            <TableCell>09123456789</TableCell>
                            <TableCell>marina.crouch@email.com</TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default App;
