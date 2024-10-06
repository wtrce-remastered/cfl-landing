import styled, { css } from "styled-components"

import { mobileMedia } from "shared/config"
import { pxToRem } from "shared/lib/helpers/px-to-rem"
import { Typography } from "shared/ui-kit"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1.25rem;

    ${mobileMedia(css`
        padding: 0 0.625rem;
    `)}
`

export const WrapperTitle = styled(Typography).attrs(props => ({
    $fontSize: props.theme.fsizes.xlarge,
    color: props.theme.colors.black
}))`
    ${props =>
        mobileMedia(css`
            font-size: ${pxToRem(props.theme.fsizes.large).cssValue};
        `)}
`

