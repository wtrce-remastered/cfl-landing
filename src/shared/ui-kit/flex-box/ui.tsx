import styled, { CSSProperties } from "styled-components"

interface FlexBoxProps {
    $direction?: CSSProperties["flexDirection"]
    $wrap?: boolean
    $grow?: CSSProperties["flexGrow"]
    $alignItems?: CSSProperties["alignItems"]
    $justifyContent?: CSSProperties["justifyContent"]
    $gap?: CSSProperties["gap"]
    $padding?: CSSProperties["padding"]
    $fullWidth?: boolean
}

export const FlexBox = styled.div<FlexBoxProps>`
    display: flex;

    flex-direction: ${props => props.$direction};
    justify-content: ${props => props.$justifyContent};
    align-items: ${props => props.$alignItems};
    flex-wrap: ${props => props.$wrap && "wrap"};
    flex-grow: ${props => props.$grow};

    gap: ${props => props.$gap};
    padding: ${props => props.$padding};

    width: ${props => props.$fullWidth && "100%"};
`
