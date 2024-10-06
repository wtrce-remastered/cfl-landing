import styled, { css, CSSProperties } from "styled-components"

import { pxToRemIfNumber } from "shared/lib/helpers/px-to-rem"
import { ButtonsStyleColors, ButtonStyle } from "shared/ui-kit/button/model.ts"

interface ButtonProps {
    $style?: ButtonStyle
    $width?: string
    $unboxed?: boolean
    $borderRadius?: string
    $padding?: CSSProperties["padding"]
    $customStyle?: Partial<{ color: string; background: string }>
    $disabledStyle?: ButtonStyle | ButtonProps["$customStyle"]
    $gap?: CSSProperties["gap"]
    $autoFillIconColor?: boolean
}

export const Button = styled.button<ButtonProps>`
    transition: 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ $gap }) => $gap || ".9375rem"};

    width: ${({ $width }) => $width || "max-content"};
    padding: ${({ $unboxed, $padding }) => ($padding ? $padding : !$unboxed ? ".625rem 1.5625rem .625rem 1.5625rem" : "unset")};

    ${({ $style = ButtonStyle.Primary, $customStyle, $disabledStyle = ButtonStyle.Ghost, $autoFillIconColor = true, disabled }) => {
        const disabledStyle =
            typeof $disabledStyle === typeof ButtonStyle["Primary"] ? ButtonsStyleColors[$disabledStyle as ButtonStyle] : ($disabledStyle as ButtonProps["$customStyle"])
        const style = (disabled ? disabledStyle : $customStyle) || ButtonsStyleColors[$style]

        return css`
            color: ${style.color};
            background: ${style.background};

            svg path {
                stroke: ${$autoFillIconColor && style.color};
            }
        `
    }}

    font-weight: 300;
    font-size: ${props => pxToRemIfNumber(props.theme.fsizes.small).cssValue};

    border: none;
    border-radius: ${({ $borderRadius }) => $borderRadius ?? "3.125rem"};

    cursor: pointer;
    user-select: none;

    &:disabled {
        cursor: unset;
    }

    & > svg {
        width: 1.5rem;
        height: max-content;
    }
`

