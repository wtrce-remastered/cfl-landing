import * as yup from "yup"

export interface ShippingFromFormPayload {
    type: string
    country: string
    address: string
}

export const ShippingFromFormResolver = yup.object<ShippingFromFormPayload>().shape({
    type: yup.string().required(),
    country: yup.string().required(),
    address: yup.string().required("Required")
})

