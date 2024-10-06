import React, { ReactNode } from "react"

import { Container, Content, ContentProps } from "./styled"

interface CenterContainerProps extends ContentProps {
    children: ReactNode
}

export const CenterContainer: React.FC<CenterContainerProps> = ({ children, ...props }) => (
    <Container>
        <Content {...props}>{children}</Content>
    </Container>
)

