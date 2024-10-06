import * as yup from "yup"

export interface Cargo {
    cargoId: string

    type: string
    amount: string

    weight: string
    weightType: string

    dimensionLength: string
    dimensionWidth: string
    dimensionHeight: string
    dimensionUnit: string
}

export interface PalletCargoFormPayload extends Omit<Cargo, "cargoId"> {}

export const PalletCargoFormResolver = yup.object().shape({
    type: yup.string().required(),
    amount: yup.string().default("1"),
    weight: yup.string().required("Required"),
    weightType: yup.string().required(),

    dimensionLength: yup.string().required("Required"),
    dimensionWidth: yup.string().required("Required"),
    dimensionHeight: yup.string().required("Required"),
    dimensionUnit: yup.string().required()
})

