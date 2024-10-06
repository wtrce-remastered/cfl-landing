import { CenterContainer } from "shared/ui-kit"

import { Goals } from "../model.tsx"

import { FirstIllustration, SecondIllustration, ThirdIllustration } from "./illustrations.tsx"
import {
    BasicGoalsLabel,
    BasicGoalsWrapper,
    GoalBox,
    GoalBoxDescription,
    GoalBoxLabel,
    GoalListWrapper,
    GoalsBox,
    GoalsWrapper,
    IllustrationBox,
    MainGoals,
    MainGoalSymbol,
    Wrapper
} from "./styled"

export const BasicGoalsFrame = () => (
    <CenterContainer $mobilePadding="0px">
        <Wrapper>
            <GoalsWrapper>
                <FirstIllustration />
                <GoalsBox>
                    <BasicGoalsLabel>Main Goals</BasicGoalsLabel>

                    <BasicGoalsWrapper>
                        <IllustrationBox>
                            <SecondIllustration />
                            <ThirdIllustration />
                        </IllustrationBox>

                        <MainGoalSymbol>Our mission is</MainGoalSymbol>
                        <MainGoals>
                            to simplify the freight process <br />
                            and make it more transparent <br />
                            and accessible to all market participants <br />
                        </MainGoals>
                    </BasicGoalsWrapper>
                </GoalsBox>
            </GoalsWrapper>

            <GoalListWrapper>
                {Goals.map(goal => (
                    <GoalBox key={goal.key}>
                        <GoalBoxLabel>
                            {goal.icon} {goal.label}
                        </GoalBoxLabel>
                        <GoalBoxDescription>{goal.description}</GoalBoxDescription>
                    </GoalBox>
                ))}
            </GoalListWrapper>
        </Wrapper>
    </CenterContainer>
)

