import styled, { css } from "styled-components"

import { mobileMedia } from "shared/config"
import { Typography } from "shared/ui-kit"

export const GoodsFormLabel = styled(Typography).attrs(props => ({
    $fontSize: props.theme.fsizes.medium
}))``

export const FormWrapper = styled.div`
    display: grid;
    gap: 2.5rem;

    ${mobileMedia(css`
        gap: 1.25rem;
    `)}
`

