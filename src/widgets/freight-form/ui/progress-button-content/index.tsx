import React from "react"
import { useTheme } from "styled-components"

import { Typography } from "shared/ui-kit"

import { FormDetails } from "widgets/freight-form/model/context.tsx"
import { Wrapper } from "widgets/freight-form/ui/progress-button-content/styled.tsx"

interface ProgressButtonContentProps extends Pick<FormDetails, "label" | "description" | "icon"> {
    active?: boolean
}

export const ProgressButtonContent: React.FC<ProgressButtonContentProps> = ({ label, description, icon: Icon, active }) => {
    const theme = useTheme()

    return (
        <Wrapper $active={active}>
            <Icon color={theme.colors.darkMatte} />

            <Typography $color={active ? "#fff" : theme.colors.darkBlue} $fontSize={theme.fsizes.medium}>
                {label}
            </Typography>
            <Typography $color={active ? "#fff" : theme.colors.granite} $fontSize={theme.fsizes.regular}>
                {description}
            </Typography>
        </Wrapper>
    )
}

