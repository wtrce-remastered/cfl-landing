import { Fragment } from "react"

import { CenterContainer } from "shared/ui-kit"

import { FreightForm } from "widgets/freight-form"
import { LandingDescription } from "widgets/freight-form/ui/rest"
import { BasicGoalsFrame, CompaniesFrame, ContactsFrame, FaceFrame, FreightFrame, GoalFrame, PartnersFrame, PossibilitiesFrame } from "widgets/landing-frames"
import { Footer, Header } from "widgets/page-navigation"

import { Wrapper } from "./styled"

export const LandingPage = () => (
    <Fragment>
        <Header />

        <FaceFrame />

        <Wrapper>
            <CenterContainer $gap="3.125rem">
                <LandingDescription />
                <FreightForm />
            </CenterContainer>

            <GoalFrame />
            <FreightFrame />
            <PossibilitiesFrame />
            <PartnersFrame />
            <CompaniesFrame />
            <BasicGoalsFrame />
            <ContactsFrame />
        </Wrapper>

        <Footer />
    </Fragment>
)

