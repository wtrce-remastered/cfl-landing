import React from "react"

import { FormsArray, FreightStep, ScaleVersionProps } from "widgets/freight-form/model"

import { ProgressButtonContent } from "../../progress-button-content"

import { FormItem, FormItemContent, Wrapper } from "./styled"

export const Mobile: React.FC<ScaleVersionProps> = ({ currentStep, onCurrentStepChange }) => {
    const handleChangeStep = (payload: FreightStep) => payload !== currentStep && onCurrentStepChange(payload)

    return (
        <Wrapper>
            {FormsArray.map(step => {
                const active = currentStep === step.key

                return (
                    <FormItem onClick={() => handleChangeStep(step.key)} $active={active} key={step.key}>
                        <ProgressButtonContent {...step} active={active} />

                        {active && (
                            <FormItemContent>
                                <step.Content onSubmit={console.log} onReturn={() => onCurrentStepChange(currentStep - 1)} />
                            </FormItemContent>
                        )}
                    </FormItem>
                )
            })}
        </Wrapper>
    )
}
