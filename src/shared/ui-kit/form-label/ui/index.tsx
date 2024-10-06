import { FC, PropsWithChildren } from "react"

import { Wrapper, WrapperLabel } from "./styled"

interface FormLabelProps extends PropsWithChildren {
    label: string
    mini?: boolean
}

export const FormLabel: FC<FormLabelProps> = ({ children, label, mini }) => (
    <Wrapper $mini={mini}>
        <WrapperLabel>{label}</WrapperLabel>
        <div>{children}</div>
    </Wrapper>
)

