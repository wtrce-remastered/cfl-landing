import React, { ReactNode, useCallback } from "react"
import { CSSProperties } from "styled-components"

import { Button, ButtonStyle, RadioButton } from "shared/ui-kit"
import { SelectWrapper } from "shared/ui-kit/select/ui/styled.tsx"

import { SelectType } from "../model"

export type SelectOption = {
    label: ReactNode
    value: string
    strictStyle?: boolean
}

interface SelectProps {
    type: SelectType
    gap?: CSSProperties["gap"]
    options: SelectOption[]
    value?: ReactNode
    onChange?: (value: any) => void
}

export const Select: React.FC<SelectProps> = ({ type, gap, options, value, onChange }) => {
    const handleSelect = useCallback((payload: SelectOption["value"]) => onChange && payload !== value && onChange(payload), [onChange, value])

    return (
        <SelectWrapper $gap={gap} $type={type}>
            {type === "buttons" &&
                options.map(option => (
                    <Button
                        $style={value === option.value ? ButtonStyle.Primary : ButtonStyle.Ghost}
                        $borderRadius={option.strictStyle ? ".9375rem" : undefined}
                        onClick={() => handleSelect(option.value)}
                        key={option.value}
                    >
                        {option.label}
                    </Button>
                ))}

            {type === "radio" &&
                options.map(option => (
                    <RadioButton active={value === option.value} onClick={() => handleSelect(option.value)} key={option.value}>
                        {option.label}
                    </RadioButton>
                ))}
        </SelectWrapper>
    )
}

