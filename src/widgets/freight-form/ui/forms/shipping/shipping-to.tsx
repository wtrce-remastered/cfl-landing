import { yupResolver } from "@hookform/resolvers/yup"
import React, { useCallback } from "react"
import { FormProvider, useForm } from "react-hook-form"

import { Button, FlexBox, FormLabel, Icon } from "shared/ui-kit"

import { DropdownField, InputField } from "features/form-fields"

import { FormDemoData, FormProps, FreightStep } from "widgets/freight-form/model"
import { ShippingToFormPayload, ShippingToFormResolver } from "widgets/freight-form/model/forms"

import { DropdownsWrapper } from "./styled"

export const ShippingToForm: React.FC<FormProps> = ({ onSubmit, onReturn }) => {
    const form = useForm<ShippingToFormPayload>({
        mode: "onBlur",
        resolver: yupResolver(ShippingToFormResolver),
        defaultValues: {
            type: "factory",
            country: "china"
        }
    })

    const handleSubmit = useCallback((payload: ShippingToFormPayload) => onSubmit && onSubmit<ShippingToFormPayload>(FreightStep.ShippingTo, payload), [onSubmit])
    const handleReturn = useCallback(() => onReturn && onReturn(), [onReturn])

    return (
        <FormProvider {...form}>
            <FlexBox $gap=".875rem" $direction="column" $alignItems="end">
                <FlexBox $gap="1.25rem" $direction="column" $fullWidth>
                    <DropdownsWrapper>
                        <FormLabel label="Type">
                            <DropdownField name="type" options={FormDemoData.placeTypes} />
                        </FormLabel>

                        <FormLabel label="Country">
                            <DropdownField name="country" options={FormDemoData.countries} />
                        </FormLabel>
                    </DropdownsWrapper>

                    <FormLabel label="Address">
                        <InputField name="address" placeholder="430..." />
                    </FormLabel>
                </FlexBox>

                <FlexBox $justifyContent="space-between" $fullWidth>
                    <Button onClick={handleReturn}>Previous step</Button>

                    <Button onClick={form.handleSubmit(handleSubmit)} disabled={!form.formState.isValid}>
                        Next step
                        <Icon.Arrow />
                    </Button>
                </FlexBox>
            </FlexBox>
        </FormProvider>
    )
}

