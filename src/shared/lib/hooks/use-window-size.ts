import { useEffect, useMemo, useState } from "react"

import { internalConfig, WindowBreakpoint } from "shared/config"
import { throttle } from "shared/lib/helpers"

export const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth)

    const currentBreakpoint: WindowBreakpoint = useMemo(() => {
        let result: WindowBreakpoint = WindowBreakpoint.XS

        for (const breakpoint of Object.keys(internalConfig.windowBreakpoints)) {
            const value = breakpoint as unknown as WindowBreakpoint
            if (width >= internalConfig.windowBreakpoints[value]) result = value
        }

        return result
    }, [width])

    useEffect(() => {
        const handleResize = throttle(() => setWidth(window.innerWidth), 100)

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return { width, currentBreakpoint }
}
