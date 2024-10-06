import { lightTheme } from "shared/config"
import "styled-components"

type LightTheme = typeof lightTheme

declare module "styled-components" {
    export interface DefaultTheme extends LightTheme {}
}

