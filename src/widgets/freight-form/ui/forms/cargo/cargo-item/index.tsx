import { ReactNode, useCallback } from "react"
import { useTheme } from "styled-components"

import { FCWithHTML } from "shared/lib/types"
import { Icon, Typography } from "shared/ui-kit"

import { Wrapper } from "widgets/freight-form/ui/forms/cargo/cargo-item/styled.tsx"

interface CargoItemProps {
    cargoId: string
    amount: ReactNode
    details: ReactNode
    onRemove: (id: string) => void
}

export const CargoItem: FCWithHTML<CargoItemProps, HTMLDivElement> = ({ cargoId, amount, details, onRemove, ...props }) => {
    const theme = useTheme()

    const handleRemove = useCallback(() => onRemove(cargoId), [cargoId, onRemove])

    return (
        <Wrapper {...props}>
            <Typography $fontSize={theme.fsizes.small} $color={theme.colors.darkBlue}>
                Load {cargoId}
            </Typography>
            <Typography $fontSize={theme.fsizes.small} $color={theme.colors.darkBlue}>
                {amount} Pallets
            </Typography>
            <Typography $fontSize={theme.fsizes.small} $color={theme.colors.granite}>
                {details}
            </Typography>

            <Icon.Trash onClick={handleRemove} />
        </Wrapper>
    )
}

