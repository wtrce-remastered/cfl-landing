import { CSSProperties } from "styled-components"

import { lightTheme } from "shared/config"

export enum TypographyStyle {
    Title,
    Description,
    Inscription,
    Small,
    Link
}

export interface ITypographyStyle {
    $color?: string
    $fontSize?: number | string
    $fontWeight?: number
}

export interface TypographyProps extends ITypographyStyle {
    $style?: TypographyStyle
    $link?: boolean
    $gap?: CSSProperties["gap"]
}

export const TypographyStyleSizes: Record<TypographyStyle, Partial<ITypographyStyle>> = {
    [TypographyStyle.Title]: {
        $fontSize: lightTheme.fsizes.xlarge
    },
    [TypographyStyle.Inscription]: {
        $fontSize: lightTheme.fsizes.small
    },
    [TypographyStyle.Small]: {
        $fontSize: lightTheme.fsizes.tiny
    },
    [TypographyStyle.Description]: {
        $fontSize: lightTheme.fsizes.regular,
        $color: lightTheme.colors.granite,
        $fontWeight: 300
    },
    [TypographyStyle.Link]: {
        $fontSize: lightTheme.fsizes.tiny
    }
}

