import { yupResolver } from "@hookform/resolvers/yup"
import React, { useCallback } from "react"
import { FormProvider, useForm } from "react-hook-form"

import { Button, FlexBox, FormLabel, Icon } from "shared/ui-kit"

import { DropdownField, InputField } from "features/form-fields"

import { FormDemoData, FormProps, FreightStep } from "widgets/freight-form/model"
import { ShippingFromFormPayload, ShippingFromFormResolver } from "widgets/freight-form/model/forms"

import { DropdownsWrapper } from "./styled"

export const ShippingFromForm: React.FC<FormProps> = ({ onSubmit }) => {
    const form = useForm<ShippingFromFormPayload>({
        mode: "onBlur",
        resolver: yupResolver(ShippingFromFormResolver),
        defaultValues: {
            type: "factory",
            country: "china"
        }
    })

    const handleSubmit = useCallback((payload: ShippingFromFormPayload) => onSubmit && onSubmit<ShippingFromFormPayload>(FreightStep.ShippingFrom, payload), [onSubmit])

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

                <Button onClick={form.handleSubmit(handleSubmit)} disabled={!form.formState.isValid}>
                    Next step
                    <Icon.Arrow />
                </Button>
            </FlexBox>
        </FormProvider>
    )
}

