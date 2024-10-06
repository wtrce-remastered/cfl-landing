import { FCWithHTML } from "shared/lib/types"

interface DividerProps {
    color?: string
}

export type DividerUI = FCWithHTML<DividerProps, HTMLDivElement>

