import React, { ReactNode, useMemo } from "react"
import { Controller, useFormContext } from "react-hook-form"

import { Dropdown, WithError } from "shared/ui-kit"

import { FieldProps } from "features/form-fields/model.ts"

type DropdownFieldProps = FieldProps &
    Omit<React.ComponentProps<typeof Dropdown>, "selected" | "children"> & {
        options: { label: ReactNode; key: string }[]
    }

export const DropdownField: React.FC<DropdownFieldProps> = ({ name, customError, options, ...props }) => {
    const { control } = useFormContext()

    const optionsValues = useMemo(() => {
        const result: Record<string, ReactNode> = {}
        for (const option of Object.values(options)) result[option.key] = option.label

        return result
    }, [options])

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <WithError error={customError || fieldState.error?.message}>
                    <Dropdown selected={optionsValues[field.value]} split {...props}>
                        {options.map(option => (
                            <Dropdown.Option onClick={() => field.onChange(option.key)} key={option.key}>
                                {option.label}
                            </Dropdown.Option>
                        ))}
                    </Dropdown>
                </WithError>
            )}
        />
    )
}
