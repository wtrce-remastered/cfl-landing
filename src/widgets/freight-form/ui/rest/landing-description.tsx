import { useTheme } from "styled-components"

import { Typography } from "shared/ui-kit"

import { Wrapper, WrapperTitle } from "./styled"

export const LandingDescription = () => {
    const theme = useTheme()

    return (
        <Wrapper>
            <WrapperTitle>Where would you like to ship your cargo?</WrapperTitle>
            <Typography $fontSize={theme.fsizes.regular} $color={theme.colors.granite}>
                Start your search to compare, book, and manage your shipments — all on one platform.
            </Typography>
        </Wrapper>
    )
}

