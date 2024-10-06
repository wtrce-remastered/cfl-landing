import styled from "styled-components"

export const Wrapper = styled.div`
    padding-top: 2.0625rem;
`

export const LabelBox = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;

    font-size: 1.25rem;
    padding: 1.6875rem 0;

    background: ${props => props.theme.colors.lightBlue};
    color: ${props => props.theme.colors.blue};

    border-radius: 0.875rem;
    width: 100%;
`

export const ContentBox = styled.div`
    padding: 0.9375rem 0.625rem;
    font-size: ${props => props.theme.fsizes.small};
`

