import { DividerUI } from "../model"

import { DivierWrapper } from "./styled"

export namespace Divider {
    export const Horizontal: DividerUI = ({ color, ...props }) => <DivierWrapper $orientation="horizontal" {...props} />
    export const Vertical: DividerUI = ({ color, ...props }) => <DivierWrapper $orientation="vertical" {...props} />
}

