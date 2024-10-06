import styled, { css } from "styled-components"

import { pxToRemIfNumber } from "shared/lib/helpers/px-to-rem"
import { ITypographyStyle, TypographyProps, TypographyStyle, TypographyStyleSizes } from "shared/ui-kit/typography/model.ts"

export const Typography = styled.div<TypographyProps>`
    display: flex;
    align-items: center;
    gap: ${({ $gap }) => $gap || ".9375rem"};

    height: max-content;

    & *,
    & {
        ${({ $style = TypographyStyle.Inscription, $color, $fontWeight, $fontSize }) => {
            const selectedStyle = TypographyStyleSizes[$style]

            return css`
                color: ${$color || selectedStyle.$color};
                font-size: ${$fontSize ? pxToRemIfNumber($fontSize).cssValue : selectedStyle.$fontSize && pxToRemIfNumber(selectedStyle.$fontSize).cssValue};
                font-weight: ${$fontWeight || selectedStyle.$fontWeight};

                svg path {
                    stroke: ${$color};
                }
            `
        }}
    }

    ${({ $link }) =>
        $link &&
        css`
            cursor: pointer;

            &:hover,
            svg path {
                transition: 0.3s;
                color: ${props => props.theme.colors.blue};

                svg path {
                    stroke: ${props => props.theme.colors.blue};
                }
            }

            &:not(:hover) {
                transition: 0.2s;
            }
        `}
`

interface TypographyInsert extends ITypographyStyle {}

export const TypographyInsert = styled.label<TypographyInsert>`
    & *,
    & {
        color: ${({ $color }) => $color};
        font-size: ${({ $fontSize }) => $fontSize};
        font-weight: ${({ $fontWeight }) => $fontWeight};
    }
`

