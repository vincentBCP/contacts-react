import { Slice, createSlice } from '@reduxjs/toolkit';

import Contact from '../models/Contact';

export interface IAppState {
    contacts: Contact[]
}

const initialState: IAppState = {
    contacts: [
        {
            id: "1",
            firstName: "Jedd",
            lastName: "Gordon",
            mobileNumber: "09123456789",
            emailAddress: "jedd.gordon.com"
        },
        {
            id: "2",
            firstName: "Aarron",
            lastName: "Moss",
            mobileNumber: "09123456789",
            emailAddress: "aarron.moss@email.com"
        },
        {
            id: "3",
            firstName: "Marina",
            lastName: "Crouch",
            mobileNumber: "09123456789",
            emailAddress: "marina.crouch@email.com"
        }
    ]
}

const appSlice: Slice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        addContact: (state: IAppState, action) => {
            // action.payload = Contact
            state.contacts.push(action.payload);
        },
        updateContact: (state: IAppState, action) => {
            // action.payload = Contact
            const ind = state.contacts.findIndex(c => c.id === action.payload.id);

            if (ind === -1) return;

            state.contacts[ind] = action.payload;
        },
        deleteContact: (state: IAppState, action) => {
            // action.payload = string
            const ind = state.contacts.findIndex(c => c.id === action.payload);

            if (ind === -1) return;

            state.contacts.splice(ind, 1);
        }
    }
});

export const {
    addContact,
    updateContact,
    deleteContact
} = appSlice.actions;

export default appSlice.reducer;