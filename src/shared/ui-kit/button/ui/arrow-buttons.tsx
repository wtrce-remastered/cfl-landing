import React from "react"
import styled from "styled-components"

import { FlexBox } from "shared/ui-kit/flex-box"
import { Icon } from "shared/ui-kit/icon"

import { Button } from "./button"

const ButtonsWrapper = styled(FlexBox).attrs({
    $gap: ".9375rem"
})`
    & > * {
        padding: 0.8125rem;
        border-radius: 100%;
    }
`

interface ArrowButtonProps {
    $side: "left" | "right"
}

const ArrowButton = styled(Button).attrs(props => ({
    $disabledStyle: { color: props.theme.colors.skyBlue, background: "#fff" }
}))<ArrowButtonProps>`
    & > svg {
        width: 0.75rem;
        height: 0.75rem;

        transform: rotate(${({ $side }) => ($side === "left" ? "" : "-")}90deg);
    }
`

interface ArrowButtonsProps {
    hasNext: boolean
    hasPrev: boolean
    onNext: () => void
    onPrev: () => void
}

export const ArrowButtons: React.FC<ArrowButtonsProps> = ({ hasNext, hasPrev, onNext, onPrev }) => {
    return (
        <ButtonsWrapper>
            <ArrowButton $side="left" onClick={onPrev} disabled={!hasPrev}>
                <Icon.ChevronDown />
            </ArrowButton>
            <ArrowButton $side="right" onClick={onNext} disabled={!hasNext}>
                <Icon.ChevronDown />
            </ArrowButton>
        </ButtonsWrapper>
    )
}

