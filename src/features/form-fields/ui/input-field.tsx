import React from "react"
import { useFormContext } from "react-hook-form"

import { Input, WithError } from "shared/ui-kit"

import { FieldComponentOmit, FieldProps } from "features/form-fields/model.ts"

export const InputField: React.FC<FieldProps & Omit<React.ComponentProps<typeof Input>, FieldComponentOmit>> = ({ name, customError, ...props }) => {
    const { register, formState } = useFormContext()

    const formError = customError || (formState.errors[name]?.message as string)

    return (
        <WithError error={customError || formError} miniGap={!props.$borderless}>
            <Input {...register(name)} {...props} />
        </WithError>
    )
}

