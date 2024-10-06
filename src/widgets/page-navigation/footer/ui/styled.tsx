import styled, { css } from "styled-components"

import { mobileMedia } from "shared/config"

export const Wrapper = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.darkBlue};

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 95rem;
    display: flex;
    justify-content: space-between;
    padding: 1.875rem 0.9375rem;

    ${mobileMedia(css`
        flex-direction: column;
        gap: 1.5625rem;

        padding: 3.125rem 1.5625rem;
    `)}
`

export const LogoGroup = styled.img`
    ${mobileMedia(css`
        width: 30%;
    `)}
`

export const ContactsWrapper = styled.div`
    display: flex;
    gap: 6.25rem;

    ${mobileMedia(css`
        flex-direction: column;
        gap: 1.5625rem;
    `)}
`

export const ContactField = styled.div`
    display: flex;
    justify-content: space-between;
    width: 13rem;
`

