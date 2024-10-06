import { useTheme } from "styled-components"

import { CenterContainer, Icon, Typography } from "shared/ui-kit"

import { useAdaptiveStore } from "features/with-window-adaptive"

import { marketMembers } from "../model"

import { GoalBoxLabels } from "./scale/goal-box-label"
import { GoalBox, GoalBoxDescription, GoalBoxIcons, MarketMember, MarketMembersWrapper, MemberDescription, MemberIconBox, MemberName, Wrapper } from "./styled"

export const GoalFrame = () => {
    const mobile = useAdaptiveStore(state => state.isMobile)
    const theme = useTheme()

    return (
        <CenterContainer>
            <Wrapper>
                <MarketMembersWrapper>
                    {marketMembers.map(member => (
                        <MarketMember key={member.name}>
                            <MemberIconBox>
                                <member.icon />
                            </MemberIconBox>

                            <MemberName>{member.name}</MemberName>
                            <MemberDescription>{member.description}</MemberDescription>
                        </MarketMember>
                    ))}
                </MarketMembersWrapper>

                <GoalBox>
                    <div>
                        <GoalBoxIcons>
                            <Icon.Logo color={theme.colors.granite} />
                            <Typography $color={theme.colors.granite} $fontSize="1.125rem">
                                CargoFantasyLimited
                            </Typography>
                        </GoalBoxIcons>

                        {mobile ? <GoalBoxLabels.Mobile /> : <GoalBoxLabels.Desktop />}
                        <GoalBoxDescription>By integrating the global supply chain, logistics, and customs clearance</GoalBoxDescription>
                    </div>
                </GoalBox>
            </Wrapper>
        </CenterContainer>
    )
}

