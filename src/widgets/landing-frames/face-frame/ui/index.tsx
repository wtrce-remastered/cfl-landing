import { useAdaptiveStore } from "features/with-window-adaptive"

import { Desktop, Mobile } from "./scale"

export const FaceFrame = () => {
    const mobile = useAdaptiveStore(state => state.isMobile)

    return mobile ? <Mobile /> : <Desktop />
}

