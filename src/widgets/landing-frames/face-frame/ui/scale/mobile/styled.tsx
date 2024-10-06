import styled from "styled-components"

import { TypographyInsert } from "shared/ui-kit"

export const Wrapper = styled.div`
    display: grid;
    align-items: end;

    background: url("/assets/images/face-frame-mobile-ship.png");
    background-repeat: no-repeat;
    background-size: 100vw;
    background-position: center -6.25rem;
    padding-top: 70%;
`

export const ContentBox = styled.div`
    display: grid;
    gap: 1.5625rem;

    background: #fff;
    box-shadow: 0 0 1.5625rem 0 #0000000a;

    border-radius: 0.625rem;
    padding: 1.5625rem;
`

export const Selected = styled(TypographyInsert).attrs(props => ({
    $color: props.theme.colors.blue
}))``

