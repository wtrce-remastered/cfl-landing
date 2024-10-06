import styled, { css } from "styled-components"

import { mobileMedia } from "shared/config"
import { Typography, TypographyStyle } from "shared/ui-kit"

export const Wrapper = styled.div`
    display: grid;
    grid-template-areas: "marketMembers goal";
    gap: 1.875rem;

    ${mobileMedia(css`
        grid-template-areas:
            "goal"
            "marketMembers";

        gap: 1.875rem;
    `)}
`

export const MarketMembersWrapper = styled.div`
    display: grid;
    gap: 0.9375rem;
    grid-area: marketMembers;

    ${mobileMedia(css`
        gap: 1.5625rem;
        padding: 0 1.5625rem;
    `)}
`

export const MarketMember = styled.div`
    display: grid;
    gap: 1.25rem 2.1875rem;
    padding: 1.5625rem 0.9375rem;
    grid-template-areas:
        "memberIcon memberTitle"
        "memberIcon memberDescription";

    ${mobileMedia(css`
        align-items: center;

        grid-template-areas:
            "memberIcon memberTitle"
            "memberDescription memberDescription";

        grid-template-columns: max-content 1fr;
        grid-template-rows: 1fr;

        gap: 0.625rem;
        padding: unset;
    `)}
`

export const MemberIconBox = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;

    width: max-content;
    height: max-content;
    padding: 1.5625rem;

    border-radius: 1.5625rem;
    background: ${props => props.theme.colors.lightBlue};

    & > svg {
        width: 1.5625rem;
        height: 1.5625rem;

        stroke: ${props => props.theme.colors.blue};
    }

    grid-area: memberIcon;

    ${mobileMedia(css`
        display: flex;

        width: 3rem;
        height: 3rem;

        padding: 0.4375rem;
        border-radius: 0.3125rem;

        & svg {
            width: 1.75rem;
            height: 1.75rem;
        }
    `)}
`

export const MemberName = styled(Typography).attrs(props => ({
    $fontSize: props.theme.fsizes.medium,
    $color: props.theme.colors.blue
}))`
    grid-area: memberTitle;
`

export const MemberDescription = styled(Typography).attrs({
    $style: TypographyStyle.Description
})`
    grid-area: memberDescription;
`

export const GoalBox = styled.div`
    grid-area: goal;
    border-radius: 1.9519rem 5.8125rem 1.9519rem 1.9519rem;
    background: ${props => props.theme.colors.lightBlue};

    width: 43.25rem;

    & > div {
        display: grid;
        padding: 6.875rem 3.125rem;
        gap: 1.875rem;
    }

    ${mobileMedia(css`
        width: 100%;
        border-radius: 0.875rem;

        & > div {
            padding: 1.5625rem;
            gap: 0.9375rem;
        }
    `)}
`

export const GoalBoxIcons = styled.div`
    display: flex;
    gap: 0.8125rem;

    max-height: 1.5625rem;

    align-items: center;
    height: max-content;

    & > svg:nth-child(1) {
        width: 1.75rem;
        height: 1.75rem;
    }

    ${mobileMedia(css`
        gap: 0.5rem;
        height: 0.9375rem;
    `)}
`

export const GoalBoxDescription = styled(Typography).attrs(props => ({
    $fontSize: props.theme.fsizes.medium,
    $color: props.theme.colors.granite,
    $fontWeight: 300
}))``

