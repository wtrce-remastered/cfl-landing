import styled from "styled-components"

import { Button, FlexBox } from "shared/ui-kit"

export const ProgressSection = styled(FlexBox).attrs({
    $gap: "1.25rem"
})`
    height: max-content;
`

export const ProgressButton = styled(Button)`
    justify-content: start;

    box-shadow: 0rem 0rem 1.5625rem 0rem #0000000a;

    width: 27.875rem;
    border-radius: 2rem;
`

export const ProgressChainsWrapper = styled.div`
    padding: 2.375rem 0;
`

export const ContentSection = styled.div`
    width: 61.9375rem;
    border-radius: 2rem;
    box-shadow: 0rem 0.25rem 9.375rem 0rem #0000000a;
`

export const ContentHeader = styled.div`
    display: flex;

    align-items: center;

    gap: 1.25rem;
    padding: 1.5625rem 1.875rem 1.5625rem 1.875rem;

    border-bottom: 1px solid ${props => props.theme.colors.lightGray};

    & > svg {
        width: 2.25rem;
        height: 2.25rem;

        stroke: ${props => props.theme.colors.darkMatte};
    }
`

export const ContentWrapper = styled.div`
    padding: 1.5625rem 3.125rem;
`

