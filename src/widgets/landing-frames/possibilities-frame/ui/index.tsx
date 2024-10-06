import { useAdaptiveStore } from "features/with-window-adaptive"

import { Desktop } from "widgets/landing-frames/possibilities-frame/ui/scale/desktop"

import { Mobile } from "./scale"

export const PossibilitiesFrame = () => {
    const mobile = useAdaptiveStore(state => state.isMobile)
    return mobile ? <Mobile /> : <Desktop />
}
