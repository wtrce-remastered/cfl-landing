import React, { PropsWithChildren, ReactNode } from "react"

import { Typography, TypographyStyle } from "shared/ui-kit"
import { ErrorBox, WithErrorWrapper } from "shared/ui-kit/with-error/ui/styled.tsx"

interface WithError {
    error?: ReactNode
    miniGap?: boolean
}

export const WithError: React.FC<PropsWithChildren & WithError> = ({ children, error, miniGap }) => {
    const isErrorCustom = typeof error === "object"

    return (
        <WithErrorWrapper>
            {children}
            {error && <ErrorBox $miniGap={miniGap}>{isErrorCustom ? error : <Typography $style={TypographyStyle.Small}>{error}</Typography>}</ErrorBox>}
        </WithErrorWrapper>
    )
}

