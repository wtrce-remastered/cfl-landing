import { yupResolver } from "@hookform/resolvers/yup"
import React, { useMemo } from "react"
import { FormProvider, useForm } from "react-hook-form"

import { FlexBox, FormLabel, Note, Unifier } from "shared/ui-kit"

import { DropdownField, InputField } from "features/form-fields"

import { FormDemoData, FormProps } from "widgets/freight-form/model"
import { GoodsFormPayload, GoodsFormResolver } from "widgets/freight-form/model/forms/goods.ts"

import { FormWrapper, GoodsFormLabel } from "./styled"

export const Goods: React.FC<FormProps> = () => {
    const currencyOptions = useMemo(() => FormDemoData.currencies.map(type => ({ key: type, label: type })), [])

    const form = useForm<GoodsFormPayload>({
        mode: "onBlur",
        resolver: yupResolver(GoodsFormResolver),
        defaultValues: {
            totalPriceCurrency: "USD"
        }
    })

    // const handleSubmit = useCallback((payload: GoodsFormPayload) => onSubmit && onSubmit<GoodsFormPayload>(FreightStep.Goods, payload), [onSubmit])

    return (
        <FormProvider {...form}>
            <FlexBox $gap="3.125rem" $direction="column">
                <FormWrapper>
                    <Note>
                        Calculation based on total cargo volume is less accurate, and therefore more likely to incur additional fees for inaccurate or oversized dimensions.
                    </Note>
                    <GoodsFormLabel>Tell us about your cargo</GoodsFormLabel>

                    <FormLabel label="Cargo value">
                        <Unifier $width="100%">
                            <InputField name="totalPrice" placeholder="0" $width="100%" $borderless />
                            <DropdownField name="totalPriceCurrency" options={currencyOptions} borderless mini />
                        </Unifier>
                    </FormLabel>
                </FormWrapper>
            </FlexBox>
        </FormProvider>
    )
}

