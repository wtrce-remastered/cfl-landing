import styled, { css } from "styled-components"

import { mobileMedia } from "shared/config"

export const DropdownsWrapper = styled.div`
    display: flex;
    gap: 1.25rem;

    ${mobileMedia(css`
        flex-wrap: wrap;
    `)}
`

