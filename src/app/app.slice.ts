import {createSlice} from "@reduxjs/toolkit";

export interface AppState {
    themeMode: 'light' | 'dark' | undefined,
}

const localTheme = localStorage.getItem('theme');

const initialState: AppState = {
    themeMode: localTheme === 'dark' ? 'dark' : 'light',
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleTheme: state => {
            localStorage.setItem('theme', state.themeMode === 'light' ? 'dark' : 'light')
            state.themeMode = state.themeMode === 'light' ? 'dark' : 'light'
        }
    }
})

export const {toggleTheme} = appSlice.actions;

export default appSlice.reducer;