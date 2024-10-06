import styled, { css, CSSProperties } from "styled-components"

import { mobileMedia } from "shared/config"

interface UnifierProps {
    $width?: CSSProperties["width"]
    $single?: boolean
}

export const Unifier = styled.div<UnifierProps>`
    display: flex;
    align-items: center;
    width: ${({ $width }) => $width || "max-content"};
    border: 0.0938rem solid ${props => props.theme.colors.lightGray};
    border-radius: 0.3125rem;

    & > * {
        width: 100%;
        height: 100%;
        padding: 0.9375rem;
    }

    & > *:last-child {
        width: ${props => !props.$single && "unset"};
    }

    & > *:not(:last-child) {
        border: unset;
        border-right: 1px solid ${props => props.theme.colors.lightGray};
        border-radius: unset;
    }

    ${props =>
        mobileMedia(css`
            width: ${props.$width || "unset"};
        `)}
`

