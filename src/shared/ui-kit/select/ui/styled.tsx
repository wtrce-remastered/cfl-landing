import styled, { css, CSSProperties } from "styled-components"

import { mobileMedia } from "shared/config"

import { SelectType } from "../model"

const mobileTypeGaps: Record<SelectType, CSSProperties["gap"]> = {
    buttons: ".3125rem",
    radio: ".625rem"
}

interface SelectWrapperProps {
    $gap?: CSSProperties["gap"]
    $type: SelectType
}

export const SelectWrapper = styled.div<SelectWrapperProps>`
    display: flex;
    flex-wrap: wrap;

    gap: ${({ $gap }) => $gap || "2.5rem"};

    ${({ $type, $gap }) =>
        mobileMedia(css`
            gap: ${$gap || mobileTypeGaps[$type]};
        `)}
`

