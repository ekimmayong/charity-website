import { createTheme } from "@mui/material/styles";
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
    typography: {
        h1: {
            fontFamily: '"Catamaran", sans-serif'
        },
        h2: {
            fontFamily: '"Catamaran", sans-serif'
        },
        h3: {
            fontFamily: '"Catamaran", sans-serif'
        },
        h4: {
            fontFamily: '"Catamaran", sans-serif'
        },
        h5: {
            fontFamily: '"Catamaran", sans-serif'
        },
        h6: {
            fontFamily: '"Catamaran", sans-serif'
        },

    },
    palette: {
        orange: createColor('#F86917'),
        cool: createColor('#13C5D0'),
    }
})

export default theme;