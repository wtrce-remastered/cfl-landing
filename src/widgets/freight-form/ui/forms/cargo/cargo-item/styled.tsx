import styled, { css } from "styled-components"

import { mobileMedia } from "shared/config"

export const Wrapper = styled.div`
    display: grid;
    grid-template-areas: "name . amount . details . remove-icon";
    grid-template-columns: 6.25rem 4.375rem 15.625rem 4.375rem 15.375rem 1.25rem 2.1875rem;

    align-items: center;

    padding: 1.5rem 3.125rem;

    border: 1px solid ${props => props.theme.colors.lavender};
    border-radius: 1.25rem;

    & > *:nth-child(1) {
        grid-area: name;
    }

    & > *:nth-child(2) {
        grid-area: amount;
    }

    & > *:nth-child(3) {
        grid-area: details;
    }

    & > *:nth-child(4) {
        grid-area: remove-icon;
        cursor: pointer;

        width: 2.5rem;
        height: 2.5rem;
    }

    ${mobileMedia(css`
        grid-template-columns: 1fr max-content;
        grid-template-rows: repeat(3, 1fr);

        grid-gap: 0.9375rem;

        grid-template-areas:
            "name remove-icon"
            "amount remove-icon"
            "details remove-icon";

        padding: 1.5625rem;
    `)}
`

