import { create } from "zustand"

import { WindowBreakpoint } from "shared/config"

interface Store {
    isMobile: boolean
    breakpoint: WindowBreakpoint

    setIsMobile: (payload: Store["isMobile"]) => void
    setBreakpoint: (payload: WindowBreakpoint) => void
}

export const useAdaptiveStore = create<Store>()(set => ({
    isMobile: false,
    breakpoint: WindowBreakpoint.XL,

    setIsMobile: isMobile => set(() => ({ isMobile })),
    setBreakpoint: breakpoint => set(() => ({ breakpoint }))
}))
