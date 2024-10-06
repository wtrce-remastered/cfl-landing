import React from "react"

import { Icon } from "shared/ui-kit"
import { IconUI } from "shared/ui-kit/icon/model"

import { CargoForm, Goods, ShippingFromForm, ShippingToForm } from "widgets/freight-form/ui/forms"

export enum FreightStep {
    ShippingFrom,
    ShippingTo,
    Cargo,
    Goods
}

type FreightContent = React.FC<FormProps>

export interface FormDetails {
    key: FreightStep
    label: string
    description: string
    icon: IconUI
    Content: FreightContent
}

export interface ScaleVersionProps {
    currentStep: FreightStep
    onCurrentStepChange: (payload: FreightStep) => void
    currentForm: FormDetails
}

export interface FormProps {
    onSubmit: <T>(step: FreightStep, payload: T) => void
    onReturn?: () => void
}

export const FreightForms: Record<FreightStep, FormDetails> = {
    [FreightStep.ShippingFrom]: {
        key: FreightStep.ShippingFrom,
        label: "Origin",
        description: "Where are you shipping from?",
        icon: Icon.Upload,
        Content: ShippingFromForm
    },
    [FreightStep.ShippingTo]: { key: FreightStep.ShippingTo, label: "Destination", description: "Where are you shipping to?", icon: Icon.Download, Content: ShippingToForm },
    [FreightStep.Cargo]: { key: FreightStep.Cargo, label: "Cargo", description: "What are you shipping?", icon: Icon.Box, Content: CargoForm },
    [FreightStep.Goods]: { key: FreightStep.Goods, label: "Goods", description: "Describe your goods", icon: Icon.Package, Content: Goods }
}

export const FormsArray = Object.values(FreightForms)

