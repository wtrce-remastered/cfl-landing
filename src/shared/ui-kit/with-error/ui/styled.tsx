import styled from "styled-components"

export const WithErrorWrapper = styled.div`
    position: relative;
`

interface ErrorBoxProps {
    $miniGap?: boolean
}

export const ErrorBox = styled.div<ErrorBoxProps>`
    position: absolute;

    left: 0;
    margin-top: ${props => (props.$miniGap ? ".3125rem" : "1.25rem")};
    z-index: 5;

    background: #fff;

    & > * {
        color: ${props => props.theme.colors.grad};
    }
`

