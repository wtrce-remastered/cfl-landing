import styled, { css, CSSProperties } from "styled-components"

import { mobileMedia } from "shared/config"

interface InputProps {
    $borderless?: boolean
    $width?: CSSProperties["width"]
}

export const Input = styled.input<InputProps>`
    outline: none;

    padding: ${({ $borderless }) => !$borderless && ".9375rem 1.5625rem"};
    border: ${({ $borderless, theme }) => (!$borderless ? `0.0938rem solid ${theme.colors.lightGray}` : "none")};
    border-radius: 3.125rem;

    width: ${({ $width }) => $width || "-webkit-fill-available"};

    &::placeholder {
        color: ${props => props.theme.colors.lightGray};
    }

    ${mobileMedia(css`
        width: 100%;
    `)}
`

