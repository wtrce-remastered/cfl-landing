import { useTheme } from "styled-components"

import { Button, FlexBox, Icon, Typography } from "shared/ui-kit"

import { ContentBox, Selected, Wrapper } from "./styled"

export const Mobile = () => {
    const theme = useTheme()

    return (
        <Wrapper>
            <ContentBox>
                <Typography $color={theme.colors.darkBlue} $fontSize={theme.fsizes.large} $fontWeight={400}>
                    <div>
                        <Selected>Comparison</Selected> of prices and <Selected>booking of</Selected> air, rail, and road
                        <Selected> freight</Selected> transportation to French.
                    </div>
                </Typography>

                <FlexBox $gap="1.875rem" $direction="column">
                    <Typography $color={theme.colors.granite} $fontSize={theme.fsizes.small}>
                        Instant quotes from logistics companies and online freight booking.
                    </Typography>

                    <FlexBox $gap=".625rem" $wrap>
                        <Button $width="100%" $gap=".625rem" $padding=".9375rem 0">
                            <Typography $color="#fff" $fontSize={theme.fsizes.small}>
                                Next
                            </Typography>
                            <Icon.Arrow width=".6875rem" height=".8125rem" />
                        </Button>
                    </FlexBox>
                </FlexBox>
            </ContentBox>
        </Wrapper>
    )
}

