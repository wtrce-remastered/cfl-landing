import * as yup from "yup"

export interface ShippingToFormPayload {
    type: string
    country: string
    address: string
}

export const ShippingToFormResolver = yup.object<ShippingToFormPayload>().shape({
    type: yup.string().required(),
    country: yup.string().required(),
    address: yup.string().required()
})
