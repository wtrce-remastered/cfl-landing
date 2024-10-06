import styled, { css, CSSProperties } from "styled-components"

import { mobileMedia } from "shared/config"

export const Container = styled.div`
    display: flex;
    justify-content: center;

    width: 100vw;
`

export interface ContentProps {
    $width?: CSSProperties["width"]
    $padding?: CSSProperties["padding"]
    $mobilePadding?: CSSProperties["padding"]
    $gap?: CSSProperties["gap"]
}

export const Content = styled.div<ContentProps>`
    display: grid;

    width: ${props => props.$width || "94.625rem"};
    padding: ${props => props.$padding || "0 0 12.5rem 0"};
    gap: ${props => props.$gap};

    ${props =>
        mobileMedia(css`
            width: 100%;
            padding: ${props.$mobilePadding || "0 1.25rem 1.875rem 1.25rem"};
        `)}
`

