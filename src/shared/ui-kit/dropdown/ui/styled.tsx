import styled, { css, CSSProperties } from "styled-components"

import { mobileMedia } from "shared/config"

interface StyledDropdownProps {
    $active?: boolean
    $mini?: boolean
    $borderless?: boolean
    $split?: boolean
    $strict?: boolean
    $width?: CSSProperties["width"]
}

export const DropdownContainer = styled.div<StyledDropdownProps>`
    position: relative;
    transition: 0.2s;

    padding: ${({ $strict, $borderless }) => ($borderless ? "unset" : $strict ? "1.25rem .9375rem" : ".625rem 1.5625rem")};
    width: ${({ $mini, $width }) => ($mini ? "max-content" : $width)};
    user-select: none;

    ${({ $borderless, $strict }) =>
        !$borderless &&
        css`
            border: 0.0938rem solid ${props => props.theme.colors.lightGray};
            border-radius: ${$strict ? ".3125rem" : "3.125rem"};
        `}

    ${mobileMedia(css`
        width: 100%;
        max-width: unset;
    `)}
`

export const DropdownLabel = styled.div<StyledDropdownProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    & > svg {
        transition: 0.2s;
        width: 0.75rem;
        transform: ${({ $active }) => $active && "rotate(-180deg)"};
    }

    & > div {
        font-weight: ${({ $strict }) => $strict && "400"};
    }

    ${({ $mini, $borderless }) =>
        $mini &&
        css`
            padding: ${!$borderless && ".625rem"};
            gap: 0.625rem;
        `}
`

export interface SelectOptionProps extends StyledDropdownProps {
    $asLabel?: boolean
}

export const SelectOption = styled.div<SelectOptionProps>`
    display: flex;
    align-items: center;
    gap: 0.9375rem;

    transition: 0.3s;
    border-radius: 0.3125rem;

    text-overflow: ellipsis;

    cursor: pointer;

    svg {
        width: 2.1875rem;
        height: 2.1875rem;
    }

    ${({ $asLabel }) =>
        !$asLabel &&
        css`
            background: #fff;
            padding: 0.625rem 0.9375rem;

            &:hover {
                transition: 0.2s;
                background: ${props => props.theme.colors.cloudGray};
            }
        `}
`

export const DropdownContent = styled.div<StyledDropdownProps>`
    margin-top: ${({ $strict }) => ($strict ? "1.875rem" : "1.25rem")};

    ${({ $split }) =>
        $split
            ? css`
                  position: absolute;
                  width: 100%;
                  left: 0;
              `
            : css`
                  padding-top: 0.3125rem;
                  border-top: 1px solid ${props => props.theme.colors.lightGray};
              `}
`

