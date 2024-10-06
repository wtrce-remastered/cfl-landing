import { Fragment, useMemo, useState } from "react"
import { useTheme } from "styled-components"

import { CenterContainer, FlexBox, Select, Typography, TypographyStyle } from "shared/ui-kit"

import { Possibilities, PossibilityData, PossibilityKey } from "widgets/landing-frames/possibilities-frame/model.tsx"

import { PosibilitySelectWrapper } from "../styled"

export const Desktop = () => {
    const theme = useTheme()

    const [currentPossibility, setCurrentPossibility] = useState<PossibilityKey>(PossibilityKey.Compare)

    const possibilityOptions = useMemo(
        () =>
            Possibilities.map(([key, possibility]) => ({
                label: (
                    <Fragment>
                        {possibility.icon} {possibility.label}
                    </Fragment>
                ),
                value: key,
                strictStyle: true
            })),
        []
    )

    const currentObject = useMemo(() => PossibilityData[currentPossibility], [currentPossibility])

    return (
        <CenterContainer>
            <FlexBox $gap="4.6875rem" $direction="column">
                <Typography $fontSize={theme.fsizes.xlarge} $fontWeight={400} $color={theme.colors.darkBlue}>
                    CargoFantasyLimited helps companies deliver cargo to French by providing data to select the best freight offers and shipment tracking.
                </Typography>

                <PosibilitySelectWrapper>
                    <Select type="buttons" value={currentPossibility.toString()} options={possibilityOptions} gap=".625rem" onChange={setCurrentPossibility} />
                    <Typography $style={TypographyStyle.Description}>{currentObject.content}</Typography>
                </PosibilitySelectWrapper>
            </FlexBox>
        </CenterContainer>
    )
}

