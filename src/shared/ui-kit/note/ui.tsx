import styled from "styled-components"

import { Typography } from "shared/ui-kit"

interface NoteProps {
    $sideColor?: string
}

export const Note = styled(Typography).attrs(props => ({
    $fontSize: props.theme.fsizes.small,
    $color: props.theme.colors.granite
}))<NoteProps>`
    background: linear-gradient(90deg, ${props => props.theme.colors.cloudGray} 0%, rgba(248, 248, 248, 0) 100%);

    font-weight: 400;
    padding: 0.625rem 1.5625rem 0.625rem 1.5625rem;

    border-radius: 0.3125rem;
    border-left: 0.3125rem solid ${({ $sideColor, theme }) => $sideColor || theme.colors.gold};
`

