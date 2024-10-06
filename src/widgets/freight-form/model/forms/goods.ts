import * as yup from "yup"

export interface GoodsFormPayload {
    totalPrice: string
    totalPriceCurrency: string
    timePeriod: string
    danger?: boolean
}

export const GoodsFormResolver = yup.object().shape({
    totalPrice: yup.string().required("Required"),
    totalPriceCurrency: yup.string().required(),
    timePeriod: yup.string().required(),
    danger: yup.boolean()
})

