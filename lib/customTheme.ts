import {createTheme, ThemeOptions} from "@mui/material";

export const customTheme : ThemeOptions = createTheme({
    palette: {
        primary: {
            light: "#f7f4ed",
            main: "#f7f4ed",
            dark: "#120e08"
        },
        background: {
           paper: "f6f3ee",
            default: "#ede7de"
        }
    }
})
