import { useState } from "react"

import { WindowBreakpoint } from "shared/config"

import { useAdaptiveStore } from "features/with-window-adaptive"

import { Desktop, Mobile } from "widgets/freight-form/ui/scale"

import { FreightForms, FreightStep } from "../model"

export const FreightForm = () => {
    const mobile = useAdaptiveStore(state => state.breakpoint < WindowBreakpoint.XL)

    const [currentStep, setCurrentStep] = useState<FreightStep>(FreightStep.ShippingFrom)
    const CurrentForm = FreightForms[currentStep]

    return mobile ? (
        <Mobile currentForm={CurrentForm} currentStep={currentStep} onCurrentStepChange={setCurrentStep} />
    ) : (
        <Desktop currentForm={CurrentForm} currentStep={currentStep} onCurrentStepChange={setCurrentStep} />
    )
}
