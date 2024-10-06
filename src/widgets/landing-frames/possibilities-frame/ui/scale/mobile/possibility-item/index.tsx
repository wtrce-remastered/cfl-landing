import React, { ReactNode } from "react"

import { ContentBox, LabelBox, Wrapper } from "./styled"

interface PossibilityItemProps {
    label: ReactNode
    content: ReactNode
}

export const PossibilityItem: React.FC<PossibilityItemProps> = ({ label, content }) => (
    <Wrapper>
        <LabelBox>
            {label}
            <div></div>
        </LabelBox>
        <ContentBox>{content}</ContentBox>
    </Wrapper>
)

