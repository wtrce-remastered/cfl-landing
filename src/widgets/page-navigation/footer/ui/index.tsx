import { useTheme } from "styled-components"

import { FlexBox, Icon, Typography, TypographyStyle } from "shared/ui-kit"

import { contacts, menuLinks, servicesLinks } from "widgets/page-navigation/footer/model.ts"

import { ContactField, ContactsWrapper, Content, LogoGroup, Wrapper } from "./styled"

export const Footer = () => {
    const theme = useTheme()

    return (
        <Wrapper>
            <Content>
                <LogoGroup src="/assets/images/footer-logo-group.svg" alt="logo" />

                <ContactsWrapper>
                    <FlexBox $gap=".9375rem" $direction="column">
                        <Typography $style={TypographyStyle.Small} $color={theme.colors.granite}>
                            Menu
                        </Typography>

                        {menuLinks.map(link => (
                            <Typography $style={TypographyStyle.Small} $color="#fff" key={link}>
                                {link}
                            </Typography>
                        ))}
                    </FlexBox>

                    <FlexBox $gap="1.0938rem" $direction="column">
                        <Typography $style={TypographyStyle.Small} $color={theme.colors.granite}>
                            Services
                        </Typography>

                        {servicesLinks.map(service => {
                            const ServiceIcon = Icon[service.icon]

                            return (
                                <Typography $style={TypographyStyle.Small} $color="#fff" key={service.label}>
                                    <ServiceIcon color="#fff" />
                                    {service.label}
                                </Typography>
                            )
                        })}
                    </FlexBox>

                    <FlexBox $gap=".9375rem" $direction="column">
                        <Typography $style={TypographyStyle.Small} $color={theme.colors.granite}>
                            Contacts
                        </Typography>

                        {contacts.map(contact => (
                            <ContactField key={contact.value}>
                                <Typography $style={TypographyStyle.Small} $color={theme.colors.granite}>
                                    {contact.label}
                                </Typography>
                                <Typography $style={TypographyStyle.Small} $color="#fff">
                                    {contact.value}
                                </Typography>
                            </ContactField>
                        ))}
                    </FlexBox>
                </ContactsWrapper>
            </Content>
        </Wrapper>
    )
}

