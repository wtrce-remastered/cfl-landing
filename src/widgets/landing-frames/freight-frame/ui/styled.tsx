import styled, { css } from "styled-components"

import { mobileMedia } from "shared/config"
import { pxToRemIfNumber } from "shared/lib/helpers/px-to-rem"
import { Button, ButtonStyle, Typography } from "shared/ui-kit"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.125rem;

    background: ${props => props.theme.colors.blue};

    text-align: center;
    border-radius: 3.125rem;
    padding: 2.5938rem 0;

    box-shadow: 0 0.25rem 9.375rem 0 #6e739008;

    ${mobileMedia(css`
        gap: 1.5625rem;
        border-radius: 0;
        padding: 1.5625rem;
    `)}
`

export const DescriptionBox = styled.div`
    display: grid;
    gap: 0.625rem;

    ${mobileMedia(css`
        gap: 0.9375rem;
        justify-content: center;
    `)}
`

export const DescriptionLabel = styled(Typography).attrs(props => ({
    $color: "#fff",
    $fontSize: props.theme.fsizes.giant,
    $fontWeight: 700
}))`
    ${mobileMedia(css`
        justify-content: center;

        font-size: ${props => pxToRemIfNumber(props.theme.fsizes.large).cssValue};
        font-weight: 500;
    `)}
`

export const DescriptionText = styled(Typography).attrs(props => ({
    $color: "#fff",
    $fontSize: props.theme.fsizes.regular
}))`
    justify-content: center;
`

export const CalculateButton = styled(Button).attrs({
    $style: ButtonStyle.Light
})``

