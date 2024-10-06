import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;

    display: flex;
    justify-content: space-between;
    background: #fff;

    width: 100%;
    min-height: 5rem;

    border-bottom: 1px solid ${props => props.theme.colors.skyBlue};

    z-index: 1;
`

export const LogoGroup = styled.img`
    cursor: pointer;
`

