import styled from "styled-components"

import { Typography } from "shared/ui-kit/typography"

interface WrapperProps {
    $mini?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    width: ${({ $mini }) => ($mini ? "max-content" : "100%")};
    display: grid;
    gap: 0.9375rem;
`

export const WrapperLabel = styled(Typography).attrs(props => ({
    $color: props.theme.colors.granite,
    $fontSize: props.theme.fsizes.small
}))``

