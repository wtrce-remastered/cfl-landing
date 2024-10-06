import styled, { css } from "styled-components"

export const Wrapper = styled.div`
    display: grid;
    gap: 0.3125rem;
`

interface FormItemProps {
    $active?: boolean
}

export const FormItem = styled.div<FormItemProps>`
    transition: 0.3s;

    display: grid;
    gap: 0.9375rem;

    padding: 1.2813rem 0.25rem;
    box-shadow: 0rem 0rem 1.5625rem 0rem #0000000a;
    border-radius: 0.875rem;

    & > *:first-child {
        padding: 0 0.6875rem;
    }

    ${({ $active }) =>
        $active &&
        css`
            background: ${props => props.theme.colors.blue};
        `}
`

export const FormItemContent = styled.div`
    background: #fff;
    border-radius: 0.875rem;
    padding: 1.5625rem 0.625rem;

    width: 100%;
`

