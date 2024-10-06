import { useTheme } from "styled-components"

import { FlexBox, Typography } from "shared/ui-kit"

import { Partner } from "../../model"
import { PartnerLogoWrapper, PartnerWrapper, PartnerWrapperHeader } from "../styled"

export const PartnerElement: React.FC<Partner> = ({ logo: PartnerIcon, name, sign, description }) => {
    const theme = useTheme()

    return (
        <PartnerWrapper>
            <PartnerWrapperHeader>
                <PartnerLogoWrapper>
                    <PartnerIcon width="4.625rem" height="4.625rem" />
                </PartnerLogoWrapper>

                <FlexBox $gap=".625rem" $direction="column">
                    <Typography $fontSize={theme.fsizes.medium} $color={theme.colors.blue}>
                        {name}
                    </Typography>
                    <Typography $fontSize={theme.fsizes.small} $color={theme.colors.granite}>
                        {sign}
                    </Typography>
                </FlexBox>
            </PartnerWrapperHeader>

            <Typography $fontSize={theme.fsizes.small} $color={theme.colors.granite}>
                {description}
            </Typography>
        </PartnerWrapper>
    )
}

