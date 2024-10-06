import React from "react"

import { Icon } from "./ui"

export type IconKey = keyof typeof Icon

interface IconProps {
    color?: string
}

export type IconUI = React.FC<IconProps & React.SVGProps<SVGSVGElement>>

