import { lightTheme } from "shared/config"

export enum ButtonStyle {
    Primary,
    Ghost,
    Dark,
    Light
}

export const ButtonsStyleColors: Record<ButtonStyle, Record<"color" | "background", string>> = {
    [ButtonStyle.Primary]: {
        color: "#fff",
        background: lightTheme.colors.blue
    },
    [ButtonStyle.Ghost]: {
        color: lightTheme.colors.granite,
        background: lightTheme.colors.lightBlue
    },
    [ButtonStyle.Dark]: {
        color: "#fff",
        background: lightTheme.colors.darkBlue
    },
    [ButtonStyle.Light]: {
        color: lightTheme.colors.blue,
        background: "#fff"
    }
}

