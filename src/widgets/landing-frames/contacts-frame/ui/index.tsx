import { useTheme } from "styled-components"

import { CenterContainer, Icon, Typography } from "shared/ui-kit"

import { ContactData } from "../model"

import {
    ContactButton,
    ContactIcon,
    ContactItem,
    ContactLabel,
    ContactsFrameTitle,
    ContactsFrameTitleWrapper,
    ContactValue,
    DataContent,
    DataWrapper,
    DataWrapperHeader,
    MapContent,
    Wrapper
} from "./styled"

export const ContactsFrame = () => {
    const theme = useTheme()

    return (
        <CenterContainer>
            <Wrapper>
                <DataWrapper>
                    <DataWrapperHeader>
                        <ContactsFrameTitleWrapper>
                            <Icon.Logo color={theme.colors.blue} width={97} height={89} />
                            <ContactsFrameTitle>Contacts</ContactsFrameTitle>
                        </ContactsFrameTitleWrapper>

                        <Typography $color={theme.colors.darkBlue} $fontSize={theme.fsizes.small} $fontWeight={400}>
                            Get in touch with our support team through any convenient method
                        </Typography>
                    </DataWrapperHeader>

                    <DataContent>
                        {ContactData.map(contact => (
                            <ContactItem key={contact.key}>
                                <ContactIcon>
                                    <contact.icon color={theme.colors.blue} />
                                </ContactIcon>
                                <ContactLabel>{contact.label}</ContactLabel>
                                <ContactValue>{contact.value}</ContactValue>
                            </ContactItem>
                        ))}
                    </DataContent>

                    <ContactButton>Contact Us</ContactButton>
                </DataWrapper>

                <MapContent>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d309.4860310051016!2d2.3427659635287092!3d48.86468007808421!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1728218266058!5m2!1sen!2sru"
                        loading="eager"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </MapContent>
            </Wrapper>
        </CenterContainer>
    )
}

