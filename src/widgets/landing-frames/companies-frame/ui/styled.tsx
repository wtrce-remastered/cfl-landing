import styled from "styled-components"

import { WindowBreakpoint, windowBreakpoints } from "shared/config"

export const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    background: ${props => props.theme.colors.lightBlue};
    padding: 1.875rem 0;
`

export const Carousel = styled.div`
    display: flex;
    align-items: center;
    gap: 8.125rem;
    width: max-content;

    filter: grayscale(100%);

    animation: carousel-animation 400s linear infinite;

    @keyframes carousel-animation {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-100%);
        }
    }

    @media (width <= ${windowBreakpoints[WindowBreakpoint.LG]}px) {
        gap: 2.1875rem;

        & > * {
            max-height: 1.5625rem;
        }
    }
`

