import styled, { css } from "styled-components"

import { mobileMedia } from "shared/config"
import { Button, Typography } from "shared/ui-kit"

export const Wrapper = styled.div`
    display: grid;
    grid-template-areas: "data map";
    grid-template-columns: max-content;

    gap: 8.0625rem;

    ${mobileMedia(css`
        grid-template-areas: "map" "data";

        grid-template-columns: 1fr;
        grid-template-rows: max-content;

        gap: 3.125rem;
    `)}
`

export const DataWrapper = styled.div`
    display: grid;
    gap: 4.6875rem;

    width: 43.3125rem;

    grid-area: data;

    ${mobileMedia(css`
        gap: 1.5625rem;

        width: 100%;
        padding: 0 0.625rem;
    `)}
`

export const DataWrapperHeader = styled.div`
    display: grid;
    gap: 1.875rem;

    ${mobileMedia(css`
        gap: 0.9375rem;
    `)}
`

export const ContactsFrameTitleWrapper = styled.div`
    display: flex;
    align-items: center;

    gap: 1.875rem;

    ${mobileMedia(css`
        gap: 1.5625rem;

        & > svg {
            width: 3rem;
            height: 3rem;
        }
    `)}
`

export const ContactsFrameTitle = styled(Typography).attrs(props => ({
    $color: props.theme.colors.darkBlue,
    $fontSize: props.theme.fsizes.giant,
    $fontWeight: 700
}))`
    ${mobileMedia(css`
        font-size: 3rem;
        font-weight: 500;

        gap: 0.9375rem;
    `)}
`

export const DataContent = styled.div`
    & > * {
        margin-bottom: 1.5625rem;
    }

    & > *:first-child {
        padding-top: 0.9375rem;
    }

    & > *:not(:first-child) {
        padding-top: 1.875rem;
        border-top: 1px solid ${props => props.theme.colors.skyBlue};
    }

    ${mobileMedia(css`
        padding: 0 0.9375rem;

        & > * {
            margin-bottom: 0.9375rem;
            padding-top: 0.9375rem;
        }

        & > *:not(:first-child) {
            border-top: 1px solid ${props => props.theme.colors.skyBlue};
        }
    `)}
`

export const ContactItem = styled.div`
    display: grid;
    grid-template-areas:
        "icon label"
        "icon value";

    grid-template-columns: max-content;
    gap: 0.3125rem 1.5625rem;
    align-items: center;

    & > *:nth-child(1) {
        grid-area: icon;
    }

    & > *:nth-child(2) {
        grid-area: label;
    }

    & > *:nth-child(3) {
        grid-area: value;
    }

    ${mobileMedia(css`
        gap: 0.3125rem 0.9375rem;
    `)}
`

export const ContactIcon = styled.div`
    display: flex;
    padding: 0.8125rem;
    border-radius: 100%;

    background: ${props => props.theme.colors.lightBlue};

    & svg {
        width: 1.5rem;
        height: 1.5rem;

        ${mobileMedia(css`
            width: 1.75rem;
            height: 1.75rem;
        `)}
    }
`

export const ContactLabel = styled(Typography).attrs(props => ({
    $fontSize: props.theme.fsizes.small,
    $color: props.theme.colors.granite
}))``

export const ContactValue = styled(Typography).attrs(props => ({
    $fontSize: props.theme.fsizes.small,
    $color: props.theme.colors.darkBlue
}))``

export const ContactButton = styled(Button).attrs({
    $width: "18.75rem"
})`
    margin: auto;

    ${mobileMedia(css`
        width: 100%;
    `)}
`

export const MapContent = styled.div`
    width: 100%;
    height: 100%;

    grid-area: map;

    & iframe {
        width: 100%;
        height: 52.0625rem;

        border-radius: 1.25rem;
        border: none;
    }

    ${mobileMedia(css`
        display: flex;
        justify-content: center;

        padding-top: 1.375rem;

        & iframe {
            height: 9.375rem;
        }
    `)}
`

