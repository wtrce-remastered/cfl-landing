import { PropsWithChildren, useCallback } from "react"
import styled, { css } from "styled-components"

import { mobileMedia } from "shared/config"
import { FCWithHTML } from "shared/lib/types"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;

    cursor: pointer;

    & > *:last-child {
        font-weight: 400;
    }

    ${props =>
        mobileMedia(css`
            gap: 0.625rem;

            & > *:last-child {
                font-size: ${props.theme.fsizes.small};
            }
        `)}
`

interface CircleIconProps {
    $active?: boolean
}

const CircleIcon = styled.div<CircleIconProps>`
    width: 1.5625rem;
    height: 1.5625rem;

    border: ${({ $active, theme }) => ($active ? `0.3125rem solid ${theme.colors.blue}` : `1px solid ${theme.colors.black}`)};
    border-radius: 100%;

    ${({ $active, theme }) =>
        mobileMedia(css`
            width: 1.5rem;
            height: 1.5rem;

            border: ${$active ? `.1875rem solid ${theme.colors.blue}` : `1px solid ${theme.colors.black}`};
        `)}
`

interface RadioButtonProps {
    active?: boolean
    onChange?: (b: boolean) => void
}

export const RadioButton: FCWithHTML<RadioButtonProps & PropsWithChildren> = ({ children, active, onChange, ...props }) => {
    const handleChange = useCallback(() => onChange && onChange(!active), [active, onChange])

    return (
        <Wrapper onClick={handleChange} {...props}>
            <CircleIcon $active={active} />
            <div>{children}</div>
        </Wrapper>
    )
}

