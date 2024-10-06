import { Fragment } from "react/jsx-runtime"
import { useTheme } from "styled-components"

import { Typography, TypographyInsert } from "shared/ui-kit"

export namespace GoalBoxLabels {
    export const Desktop = () => {
        const theme = useTheme()

        return (
            <Fragment>
                <Typography $fontSize={theme.fsizes.huge} $color={theme.colors.darkBlue} $fontWeight={700}>
                    Goal
                </Typography>

                <Typography $fontSize={theme.fsizes.large} $color={theme.colors.darkBlue} $fontWeight={700}>
                    CargoFantasyLimited aims to unite all market participants
                </Typography>
            </Fragment>
        )
    }

    export const Mobile = () => {
        const theme = useTheme()

        return (
            <Typography $fontSize={theme.fsizes.medium} $color={theme.colors.darkBlue} $fontWeight={400}>
                <div>
                    <TypographyInsert $color={theme.colors.blue}>Goal </TypographyInsert>
                    CargoFantasyLimited aims to unite all market participants
                </div>
            </Typography>
        )
    }
}

