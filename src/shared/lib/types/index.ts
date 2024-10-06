import React, { HTMLAttributes } from "react"

export type FCWithHTML<P, E = HTMLElement> = React.FC<P & HTMLAttributes<E>>
