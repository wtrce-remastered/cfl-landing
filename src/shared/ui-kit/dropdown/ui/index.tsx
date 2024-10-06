import React, { ReactNode, useCallback, useState } from "react"
import { CSSProperties, useTheme } from "styled-components"

import { FCWithHTML } from "shared/lib/types"
import { Icon } from "shared/ui-kit"
import { DropdownContainer, DropdownContent, DropdownLabel, SelectOption, SelectOptionProps } from "shared/ui-kit/dropdown/ui/styled.tsx"

type SingleSelectUI = FCWithHTML<DropdownProps> & {
    Option: FCWithHTML<SelectOptionProps & React.PropsWithChildren>
}

interface DropdownProps {
    children: ReactNode
    selected: ReactNode
    mini?: boolean
    borderless?: boolean
    split?: boolean
    strict?: boolean
    width?: CSSProperties["width"]
}

export const Dropdown: SingleSelectUI = ({ children, selected, mini, borderless, split, strict, width }) => {
    const theme = useTheme()

    const [open, setOpen] = useState<boolean>(false)

    const handleOpenSwitch = useCallback(() => setOpen(prev => !prev), [])

    return (
        <DropdownContainer onClick={handleOpenSwitch} $borderless={borderless} $mini={mini} $strict={strict} $width={width}>
            <DropdownLabel $active={open} $mini={mini} $borderless={borderless}>
                <Dropdown.Option $asLabel>{selected}</Dropdown.Option>
                <Icon.ChevronDown color={theme.colors.darkBlue} />
            </DropdownLabel>

            {open && (
                <DropdownContent $split={split} $strict={strict}>
                    {children}
                </DropdownContent>
            )}
        </DropdownContainer>
    )
}

Dropdown.Option = SelectOption

