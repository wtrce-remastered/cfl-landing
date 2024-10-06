import { useTheme } from "styled-components"

import { FlexBox, Icon, Typography, TypographyStyle } from "shared/ui-kit"

import { logoGroupSrc, navigationLinks } from "widgets/page-navigation/header/model"

import { LogoGroup, Wrapper } from "./styled"

export const Desktop = () => {
    const theme = useTheme()

    return (
        <Wrapper>
            <FlexBox $gap="3.125rem" $alignItems="center" $padding="0 0 0 1.0938rem">
                <LogoGroup src={logoGroupSrc} alt="logo" />

                {navigationLinks.map(link => (
                    <Typography $style={TypographyStyle.Small} key={link} $link>
                        {link}
                    </Typography>
                ))}
            </FlexBox>

            <FlexBox $gap="1.875rem" $alignItems="center" $padding="0 5.9375rem 0 0">
                <Typography $link $style={TypographyStyle.Small} $color={theme.colors.blue}>
                    <Icon.PhoneOutgoing />
                    Contact Us
                </Typography>

                <Typography $link $style={TypographyStyle.Small} $color={theme.colors.blue}>
                    <Icon.Package />
                    Online Freight
                </Typography>

                <Typography $style={TypographyStyle.Small} $link>
                    <Icon.User color={theme.colors.black} />
                    Log In to Your Account
                </Typography>
            </FlexBox>
        </Wrapper>
    )
}

