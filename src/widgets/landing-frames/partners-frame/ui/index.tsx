import { useAdaptiveStore } from "features/with-window-adaptive"

import { Desktop } from "./desktop"
import { Mobile } from "./mobile"

export const PartnersFrame = () => {
    const isMobile = useAdaptiveStore(state => state.isMobile)
    return isMobile ? <Mobile /> : <Desktop />
}

