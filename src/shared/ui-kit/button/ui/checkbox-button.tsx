import styled, { useTheme } from "styled-components"

import { FCWithHTML } from "shared/lib/types"
import { Icon } from "shared/ui-kit"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;

    cursor: pointer;

    & > *:last-child {
        user-select: none;
        font-weight: 400;
    }
`

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1.5625rem;
    height: 1.5625rem;

    border: 0.125rem solid ${props => props.theme.colors.lightGray};
    border-radius: 0.3125rem;
`

interface CheckboxButtonProps {
    active?: boolean
    onChange?: (b: boolean) => void
}

export const CheckboxButton: FCWithHTML<CheckboxButtonProps, HTMLDivElement> = ({ children, active, ...props }) => {
    const theme = useTheme()

    return (
        <Wrapper {...props}>
            <IconWrapper>{active && <Icon.CheckMark color={theme.colors.blue} />}</IconWrapper>
            <div>{children}</div>
        </Wrapper>
    )
}

