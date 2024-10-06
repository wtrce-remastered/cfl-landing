import { ComponentType, useEffect } from "react"

import { WindowBreakpoint } from "shared/config"
import { useWindowSize } from "shared/lib/hooks"

import { useAdaptiveStore } from "features/with-window-adaptive"

export const withAdaptive =
    <T extends object>(Component: ComponentType<T>) =>
    (props: T) => {
        const { isMobile, breakpoint, setIsMobile, setBreakpoint } = useAdaptiveStore()

        const { currentBreakpoint } = useWindowSize()

        useEffect(() => {
            const nowIsMobile = currentBreakpoint < WindowBreakpoint.LG

            if (nowIsMobile !== isMobile) setIsMobile(nowIsMobile)
            if (breakpoint !== currentBreakpoint) setBreakpoint(currentBreakpoint)
        }, [currentBreakpoint])

        return <Component {...props} />
    }

