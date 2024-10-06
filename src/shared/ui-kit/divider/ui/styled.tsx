import styled from "styled-components"

interface DividerProps {
    $orientation: "horizontal" | "vertical"
}

export const DivierWrapper = styled.div<DividerProps>`
    background: ${props => props.theme.colors.lightGray};

    width: ${props => (props.$orientation === "horizontal" ? "100%" : "1px")};
    height: ${props => (props.$orientation === "horizontal" ? "1px" : "100%")};
`

