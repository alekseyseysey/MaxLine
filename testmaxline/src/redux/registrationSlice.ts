import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

interface RegistrationState {
    registeredPhones: string[];
}

const initialState: RegistrationState = {
    registeredPhones: [],
};

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        registerPhone: (state, action: PayloadAction<string>) => {
            if (!state.registeredPhones.includes(action.payload)) {
                state.registeredPhones.push(action.payload);
            }
        },
    },
});

export const { registerPhone } = registrationSlice.actions;
export default registrationSlice.reducer;