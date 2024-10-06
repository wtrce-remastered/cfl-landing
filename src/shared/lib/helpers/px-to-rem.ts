import { internalConfig } from "shared/config"

export const pxToRem = (px: number) => {
    const value = (px / internalConfig.interfaceRemScaleSize).toFixed(2)
    return { value, cssValue: `${value}rem` }
}

export const pxToRemIfNumber = (px: number | string) => (typeof px === "number" ? pxToRem(px) : { cssValue: px })

