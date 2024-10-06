import styled, { css } from "styled-components"

import { mobileMedia } from "shared/config"
import { Typography } from "shared/ui-kit"

export const Wrapper = styled.div`
    display: flex;
    gap: 6.25rem;

    ${mobileMedia(css`
        flex-direction: column;
        gap: 1.5625rem;

        & > * > svg {
            height: 100%;
            width: 100%;
        }
    `)}
`

export const GoalsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    ${mobileMedia(css`
        gap: 0.9375rem;
    `)}
`

export const GoalsBox = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 4.6875rem;

    width: 34.9375rem;
    padding: 3.125rem 1.5625rem;

    border-radius: 1.9375rem 10.9375rem 1.9375rem 1.9375rem;
    clip-path: border-box;

    background: ${props => props.theme.colors.blue};

    ${mobileMedia(css`
        gap: 2.1875rem;

        width: 100%;
        border-radius: 0.875rem 4.6875rem 0.875rem 0.875rem;
        padding: 1.5625rem 0.9375rem;
    `)}
`

export const BasicGoalsLabel = styled(Typography).attrs(props => ({
    $color: "#fff",
    $fontSize: props.theme.fsizes.small
}))``

export const BasicGoalsWrapper = styled.div`
    display: flex;
    gap: 1.875rem;
    flex-direction: column;

    ${mobileMedia(css`
        gap: 0.9375rem;
    `)}
`

export const MainGoalSymbol = styled(Typography).attrs(props => ({
    $color: "#fff",
    $fontSize: props.theme.fsizes.xlarge,
    $fontWeight: 400
}))`
    ${mobileMedia(css`
        font-weight: 500;
    `)}
`

export const MainGoals = styled(Typography).attrs({
    $color: "#fff"
})``

export const IllustrationBox = styled.div`
    & > svg {
        position: absolute;
        top: 0;
        right: 0;
    }
`

export const GoalListWrapper = styled.div`
    display: grid;
    gap: 0.9375rem;

    & svg {
        width: 2.1875rem;
        height: 2.1875rem;
    }

    ${mobileMedia(css`
        padding: 0 0.625rem;
    `)}
`

export const GoalBoxLabel = styled(Typography).attrs(props => ({
    $color: props.theme.colors.blue,
    $fontSize: props.theme.fsizes.medium
}))`
    ${mobileMedia(css`
        gap: 0.625rem;
    `)}
`

export const GoalBoxDescription = styled(Typography).attrs(props => ({
    $color: props.theme.colors.granite,
    $fontSize: props.theme.fsizes.regular
}))``

export const GoalBox = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1.5625rem 3.125rem;
    gap: 1.5625rem;

    ${mobileMedia(css`
        padding: 0.9375rem;
    `)}
`

