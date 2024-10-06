import { WindowBreakpoint } from "shared/config"

import { useAdaptiveStore } from "features/with-window-adaptive"

import { Desktop, Mobile } from "./scale"

export const Header = () => {
    const mobile = useAdaptiveStore(state => state.breakpoint < WindowBreakpoint.XL)

    return mobile ? <Mobile /> : <Desktop />
}
