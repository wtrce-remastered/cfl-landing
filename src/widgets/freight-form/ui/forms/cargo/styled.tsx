import styled, { css } from "styled-components"

import { mobileMedia } from "shared/config"
import { Typography } from "shared/ui-kit"

export const Wrapper = styled.div`
    display: grid;
    gap: 3.125rem;
`

export const CargoLabelWrapper = styled.div`
    display: grid;
    gap: 2.5rem;

    ${mobileMedia(css`
        gap: 1.25rem;
    `)}
`

export const CargoLabel = styled(Typography).attrs(props => ({
    $fontSize: props.theme.fsizes.medium
}))``

export const AddCargoFormWrapper = styled.div`
    display: grid;
    gap: 3.125rem;

    ${mobileMedia(css`
        gap: 1.25rem;
    `)}
`

export const ButtonGroup = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-areas: ". . .";

    ${mobileMedia(css`
        grid-template-areas: "addButton addButton" ". .";
        gap: 1.25rem 0;

        & > *:first-child {
            grid-area: addButton;
        }
    `)}

    @media (width <= 31.25rem) {
        grid-template-areas: "addButton" "." ".";
        grid-template-columns: 100%;

        & > * {
            width: 100%;
        }
    }
`

export const CargoWeightGroup = styled.div`
    display: flex;
    gap: 3.125rem;

    ${mobileMedia(css`
        flex-wrap: wrap;
        gap: 1.25rem;

        & > * {
            width: 100%;
        }
    `)}
`

