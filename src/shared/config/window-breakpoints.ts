import { css, RuleSet } from "styled-components"

export enum WindowBreakpoint {
    XS,
    SM,
    MD,
    LG,
    XL
}

export const windowBreakpoints: Record<WindowBreakpoint, number> = {
    [WindowBreakpoint.XS]: 0,
    [WindowBreakpoint.SM]: 600,
    [WindowBreakpoint.MD]: 900,
    [WindowBreakpoint.LG]: 1200,
    [WindowBreakpoint.XL]: 1530
}

export const mobileMedia = (payload: RuleSet<object>, breakpoint: WindowBreakpoint = WindowBreakpoint.LG) => css`
    @media (width <= ${windowBreakpoints[breakpoint]}px) {
        ${payload}
    }
`
