import { useTheme } from "styled-components"

import { ButtonStyle, FlexBox, ProgressChains, Typography } from "shared/ui-kit"

import { FormsArray, FreightStep, ScaleVersionProps } from "../../../model"
import { ProgressButtonContent } from "../../progress-button-content"

import { ContentHeader, ContentSection, ContentWrapper, ProgressButton, ProgressChainsWrapper, ProgressSection } from "./styled.tsx"

export const Desktop: React.FC<ScaleVersionProps> = ({ currentForm, currentStep, onCurrentStepChange }) => {
    const theme = useTheme()

    return (
        <FlexBox $gap="1.5625rem">
            <ProgressSection $gap="1.25rem">
                <ProgressChainsWrapper>
                    <ProgressChains steps={FormsArray.length} completed={currentStep} />
                </ProgressChainsWrapper>

                <FlexBox $gap=".625rem" $direction="column">
                    {FormsArray.map(step => {
                        const active = step.key === currentStep

                        return (
                            <ProgressButton
                                $style={active ? ButtonStyle.Primary : undefined}
                                $customStyle={!active ? { color: theme.colors.darkMatte, background: theme.colors.white } : undefined}
                                onClick={() => onCurrentStepChange(step.key as FreightStep)}
                                key={step.key}
                            >
                                <ProgressButtonContent {...step} active={active} />
                            </ProgressButton>
                        )
                    })}
                </FlexBox>
            </ProgressSection>

            <ContentSection>
                <ContentHeader>
                    <currentForm.icon />

                    <Typography $color={theme.colors.black} $fontSize={theme.fsizes.small}>
                        {currentForm.label}
                    </Typography>
                    <Typography $color={theme.colors.granite} $fontSize={theme.fsizes.small}>
                        {currentForm.description}
                    </Typography>
                </ContentHeader>

                <ContentWrapper>
                    <currentForm.Content onSubmit={console.log} onReturn={() => onCurrentStepChange(currentStep - 1)} />
                </ContentWrapper>
            </ContentSection>
        </FlexBox>
    )
}

