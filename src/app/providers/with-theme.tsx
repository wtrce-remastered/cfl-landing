import { ComponentType } from "react"
import { ThemeProvider } from "styled-components"

import { lightTheme } from "shared/config"

export const withTheme =
    <T extends object>(Component: ComponentType<T>) =>
    (props: T) => {
        return (
            <ThemeProvider theme={lightTheme}>
                <Component {...props} />
            </ThemeProvider>
        )
    }

