import { createMuiTheme } from "@material-ui/core";

export const atlasTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          // scrollBehavior: "smooth",
        },
      },
    },

    MuiFormHelperText: {
      // root: {
      //   position: "absolute",
      //   marginTop: "50px",
      // },
    },

    // MuiInputLabel: {
    //   root: {
    //     fontSize: "1em",
    //   },
    // },

    // MuiInputBase: {
    //   root: {
    //     fontSize: "1em",
    //   },
    // },
  },

  palette: {
    primary: {
      main: "#F15D3C",
      light: "#f37559",
      dark: "#f34a23",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2C5B6D",
      light: "#466774",
      dark: "#064158",
    },
  },
  typography: {
    fontFamily: "Barlow",
    fontWeightMedium: 600,
  },
});
