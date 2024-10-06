import styled, { css } from "styled-components"

import { mobileMedia } from "shared/config"
import { Typography } from "shared/ui-kit"

export const Wrapper = styled.div`
    display: flex;
    gap: 4.6875rem;

    ${mobileMedia(css`
        flex-direction: column;
        gap: 0.9375rem;
    `)}
`

export const PartnerWrapper = styled.div`
    display: grid;
    gap: 1.25rem;

    max-width: 42.5rem;

    padding: 1.5625rem 3.125rem;
    height: max-content;
    background: #fff;

    border-radius: 2rem;
    border: 0.0313rem solid ${props => props.theme.colors.lightBlue};

    ${mobileMedia(css`
        max-width: unset;
        width: calc(100vw - 2.5rem);

        border: unset;
        border-radius: unset;

        padding: unset;
        padding-top: 1.4375rem;
    `)}
`

export const PartnerWrapperHeader = styled.div`
    display: grid;
    grid-template-areas: ". .";
    grid-template-columns: 9.375rem 1fr;
    grid-template-rows: 5rem;

    ${mobileMedia(css`
        grid-template-columns: 6.25rem 1fr;
        gap: 0.9375rem;

        align-items: center;
    `)}
`

export const PartnerLogoWrapper = styled.div`
    position: relative;
    top: -4.6875rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #fff;
    padding: 1.375rem;

    border-radius: 100%;
    border: 1px solid ${props => props.theme.colors.lightBlue};

    width: 8.375rem;
    height: 8.375rem;

    ${props =>
        mobileMedia(css`
            top: unset;

            background: ${props.theme.colors.lightBlue};

            width: 6.25rem;
            height: 6.25rem;

            padding: unset;

            svg {
                width: 2.375rem;
                height: 2.375rem;
            }
        `)}
`

export const LabelBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.6875rem;

    width: 30rem;

    ${mobileMedia(css`
        width: calc(100vw - 2.5rem);
    `)}
`

export const PartnershipDescription = styled.div`
    display: grid;
    gap: 1.875rem;
    max-width: 29.375rem;

    ${mobileMedia(css`
        max-width: unset;
        gap: 0.9375rem;
    `)}
`

export const SliderContent = styled.div`
    display: block;
    width: 87.1875rem;

    .swiper-wrapper {
        padding-top: 3rem;

        .swiper-slide {
            width: max-content;
        }

        ${mobileMedia(css`
            padding-top: unset;

            .swiper-slide {
                width: 100%;
            }
        `)}
    }

    ${mobileMedia(css`
        width: unset;

        .swiper-wrapper {
            width: calc(100vw - 2.5rem);
        }

        .swiper-pagination {
            top: 0;
            bottom: unset;
        }
    `)}
`

export const PartnerDescription = styled(Typography).attrs(props => ({
    $fontSize: props.theme.fsizes.small,
    $color: props.theme.colors.granite
}))`
    word-break: break-word;
    word-wrap: break-word;
    white-space: pre-wrap;
`

