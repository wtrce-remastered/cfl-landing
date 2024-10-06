import { useTheme } from "styled-components"

import { Button, ButtonStyle, FlexBox, Icon, Typography, TypographyStyle } from "shared/ui-kit"

import classes from "./styles.module.scss"

export const Desktop = () => {
    const theme = useTheme()

    return (
        <div className={classes.frame}>
            <div className={classes.frameContent}>
                <div className={classes.productIdea}>
                    <FlexBox $gap="1.875rem">
                        <Icon.Logo color={theme.colors.black} className={classes.productLogo} />
                        <Typography $color={theme.colors.black} $fontSize="3.125rem" $fontWeight={600}>
                            CargoFantasyLimited
                        </Typography>
                    </FlexBox>

                    <Typography $fontSize={theme.fsizes.large} $color={theme.colors.darkBlue}>
                        Price Comparison and Booking of Air, <br />
                        Rail, and Road <br />
                        Freight to French.
                    </Typography>
                </div>

                <div className={classes.productActions}>
                    <Typography $style={TypographyStyle.Description}>Instant quotes from logistics companies and online freight booking.</Typography>

                    <FlexBox $gap="1.25rem">
                        <Button>About the project</Button>
                        <Button $style={ButtonStyle.Dark}>Start working</Button>
                    </FlexBox>
                </div>
            </div>

            <img src="/assets/images/face-frame-desctop-ship.png" alt="shipping" className={classes.shippingImage} />
            <img src="/assets/images/face-frame-desktop-back.png" alt="face-frame-background" className={classes.backgroundImage} />
        </div>
    )
}

