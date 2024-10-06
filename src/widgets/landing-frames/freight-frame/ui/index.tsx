import { CenterContainer } from "shared/ui-kit"

import { CalculateButton, DescriptionBox, DescriptionLabel, DescriptionText, Wrapper } from "./styled"

export const FreightFrame = () => (
    <CenterContainer $width="107.25rem" $mobilePadding="0 0 1.875rem 0 ">
        <Wrapper>
            <DescriptionBox>
                <DescriptionLabel>Online Freight</DescriptionLabel>

                <DescriptionText>
                    By integrating the global supply chain infrastructure, <br />
                    logistics, and customs clearance
                </DescriptionText>
            </DescriptionBox>

            <CalculateButton>Calculate your freight instantly</CalculateButton>
        </Wrapper>
    </CenterContainer>
)

