import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    apiKey: string | null;
    isLogged: boolean;
}

const initialState: AuthState = {
    apiKey: null,
    isLogged: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setApiKey(state, action) {
            state.apiKey = action.payload;
            state.isLogged = true;
            sessionStorage.setItem('apiKey', action.payload);
        },
        clearApiKey(state) {
            state.apiKey = null;
            state.isLogged = false;
            sessionStorage.removeItem('apiKey');
        }
    }
})

export const { setApiKey, clearApiKey } = authSlice.actions
export const selectApiKey = (state: { auth: AuthState }) => state.auth.apiKey
export const selectIsLogged = (state: { auth: AuthState }) => state.auth.isLogged

export default authSlice.reducer;
