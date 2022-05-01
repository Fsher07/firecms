import { pink, red } from "@mui/material/colors";
import { createTheme, Theme } from "@mui/material";

/**
 * Use this function to build the default FireCMS MUI5 theme,
 * with some overrides.
 * @category Hooks and utilities
 */
export const createCMSDefaultTheme = (
    { mode, primaryColor, secondaryColor, fontFamily }: {
        mode: "light" | "dark";
        primaryColor?: string;
        secondaryColor?: string;
        fontFamily?: string;
    }): Theme => {

    const radius = 6;

    const original = createTheme({
        palette: {
            mode: mode,
            background: {
                default: mode === "dark" ? "#242424" : "#f8f8fa",
                paper: mode === "dark" ? "#121212" : "#ffffff"
            },
            primary: {
                main: primaryColor || "#0070f4"
            },
            secondary: {
                main: secondaryColor || pink["400"]
            },
            error: {
                main: red.A400
            }
        },
        shape: {
            borderRadius: radius
        },
        typography: {
            fontFamily: fontFamily || "\"Rubik\", \"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            fontWeightMedium: 500,
            h6: {
                fontWeight: 500,
                fontSize: "1.15rem"
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: radius
                    }
                }
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        "&:last-child td": {
                            borderBottom: 0
                        }
                    }
                }
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        "&.mono": {
                            fontFamily: "'Space Mono', 'Lucida Console', monospace"
                        },
                        "&.weight-500": {
                            fontWeight: 500
                        }
                    }
                }
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        "&.mono": {
                            fontFamily: "'Space Mono', 'Lucida Console', monospace"
                        }
                    }
                }
            },
            MuiDialog: {
                styleOverrides: {
                    paper: {
                        borderRadius: radius
                    }
                }
            }
        }
    });

    return {
        ...original,
        // shadows: original.shadows.map((value, index) => {
        //     if (index == 1) return "0 1px 1px 0 rgb(0 0 0 / 16%)";
        //     else return value;
        // })
    };
};
