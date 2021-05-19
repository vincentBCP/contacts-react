import React from 'react';

import { useForm } from 'react-hook-form';

import {
    makeStyles,
    createStyles,
    Theme,

    Dialog,
    DialogContent,
    TextField,
    Button
} from '@material-ui/core';

import Contact from '../models/Contact';

import {
    nameRegExp,
    emailRegExp,
    mobileNumberRegExp
} from '../constants';

interface IFormInputs {
    firstName: string,
    middleName?: string,
    lastName: string,
    mobileNumber: string,
    emailAddress: string
}

interface IContactFormModalProps {
    open?: boolean,
    contact: Contact | null,
    handleSubmit: (arg: any) => void,
    handleCancel: () => void
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        dialog: {
            '& .MuiDialogContent-root': {
                padding: 0
            },

            '& .MuiDialog-paper': {
                maxWidth: 1000,
                maxHeight: '85vh',

                '&.MuiDialog-paperFullScreen': {
                    maxHeight: '100vh'
                }
            }
        },
        content: {
            width: 350,
            padding: "20px 20px 10px 20px"
        },
        title: {
            margin: 0,
            fontWeight: 'bold',
            fontSize: '1.2em'
        },
        formContent: {

        },
        field: {
            marginTop: 15
        },
        formActions: {
            textAlign: 'right',
            marginTop: 15
        }
    })
);

const ContactFormModal: React.FC<IContactFormModalProps> = props => {
    const classes = useStyles();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInputs>();

    React.useEffect(() => {
        if (props.open) reset();
    }, [ props.open, reset ]);

    const submit = (data: IFormInputs) => {
        props.handleSubmit(data);
    }

    return (
        <Dialog
            open={props.open || false}
            className={classes.dialog}
            onClose={props.handleCancel}
        >
            <DialogContent>
                <div className={classes.content}>
                    <p className={classes.title}>
                        {props.contact ? "Edit contact" : "Create contact"}
                    </p>
                    
                    <form onSubmit={handleSubmit(submit)} autoComplete="off">
                        <div className={classes.formContent}>
                            <TextField
                                label="First Name"
                                defaultValue={props.contact?.firstName || ""}
                                fullWidth
                                required
                                error={Boolean(errors.firstName)}
                                helperText={errors.firstName?.message || ""}
                                className={classes.field}
                                inputProps={{
                                    ...register('firstName', {
                                        required: "Required",
                                        pattern: {
                                            value: nameRegExp,
                                            message: 'Invalid format'
                                        }
                                    })
                                }}
                            />
                            <TextField
                                label="Middle Name"
                                defaultValue={props.contact?.middleName || ""}
                                fullWidth
                                error={Boolean(errors.middleName)}
                                helperText={errors.middleName?.message || ""}
                                className={classes.field}
                                inputProps={{
                                    ...register('middleName', {
                                        pattern: {
                                            value: nameRegExp,
                                            message: 'Invalid format'
                                        }
                                    })
                                }}
                            />
                            <TextField
                                label="Last Name"
                                defaultValue={props.contact?.lastName || ""}
                                fullWidth
                                required
                                error={Boolean(errors.lastName)}
                                helperText={errors.lastName?.message || ""}
                                className={classes.field}
                                inputProps={{
                                    ...register('lastName', {
                                        required: "Required",
                                        pattern: {
                                            value: nameRegExp,
                                            message: 'Invalid format'
                                        }
                                    })
                                }}
                            />
                            <TextField
                                label="Mobile Number"
                                defaultValue={props.contact?.mobileNumber || ""}
                                fullWidth
                                required
                                error={Boolean(errors.mobileNumber)}
                                helperText={errors.mobileNumber?.message || ""}
                                className={classes.field}
                                inputProps={{
                                    ...register('mobileNumber', {
                                        required: "Required",
                                        pattern: {
                                            value: mobileNumberRegExp,
                                            message: 'Invalid format'
                                        }
                                    })
                                }}
                            />
                            <TextField
                                label="Email Address"
                                defaultValue={props.contact?.emailAddress || ""}
                                fullWidth
                                required
                                error={Boolean(errors.emailAddress)}
                                helperText={errors.emailAddress?.message || ""}
                                className={classes.field}
                                inputProps={{
                                    ...register('emailAddress', {
                                        required: "Required",
                                        pattern: {
                                            value: emailRegExp,
                                            message: 'Invalid format'
                                        }
                                    })
                                }}
                            />
                        </div>
                        <div className={classes.formActions}>
                            <Button onClick={props.handleCancel}>
                                Cancel
                            </Button>
                            <Button type="submit">
                                Send
                            </Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ContactFormModal;