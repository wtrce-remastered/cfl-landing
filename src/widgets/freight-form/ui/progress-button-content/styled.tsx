import styled, { css } from "styled-components"

import { mobileMedia } from "shared/config"

interface WrapperProps {
    $active?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    display: grid;
    align-items: center;
    justify-content: start;

    gap: 0.625rem 1.25rem;

    grid-template-areas:
        "icon label"
        "icon description";

    & > div {
        text-align: start;
    }

    & > *:nth-child(1) {
        grid-area: icon;
    }

    & > svg {
        width: 2.25rem;
        height: 2.25rem;

        path {
            stroke: ${({ $active }) => $active && "#fff"};
        }
    }

    & > *:nth-child(2) {
        grid-area: label;
    }

    & > *:nth-child(3) {
        grid-area: description;
    }

    cursor: pointer;

    ${props =>
        mobileMedia(css`
            gap: 0.3125rem 0.9375rem;

            & > *:nth-child(1) {
                width: 3rem;
                height: 3rem;
            }

            & > *:nth-child(2) {
                font-size: ${props.theme.fsizes.small};
            }

            & > *:nth-child(3) {
                font-size: ${props.theme.fsizes.tiny};
            }
        `)}
`

