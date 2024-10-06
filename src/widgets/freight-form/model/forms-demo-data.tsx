import { Fragment, ReactNode } from "react"

import { lightTheme } from "shared/config"
import { Icon } from "shared/ui-kit"

export const FormDemoData = {
    placeTypes: [
        {
            key: "factory",
            label: (
                <Fragment>
                    <Icon.Factory color={lightTheme.colors.darkBlue} />
                    Factory / Warehouse
                </Fragment>
            )
        }
    ],
    countries: [
        {
            key: "china",
            label: "China"
        }
    ],
    cargoTypes: {
        cargoGroup: {
            icon: <Icon.Package />,
            label: "Consolidated cargo"
        },
        containers: {
            icon: <Icon.Container />,
            label: "Containers"
        }
    },
    calculationType: {
        cargoType: "Calculation by cargo type",
        totalLoad: "Calculation by total shipment"
    },
    packingType: {
        pallets: "Pallets",
        boxes: "Boxes / Crates"
    },
    palletTypes: ["Pallet (undefined size)"],
    dimensionsUnits: ["CM"],
    cargoWeightUnits: ["KG"],
    currencies: ["USD", "EUR"]
}

export const toLabelWithIcon = (payload: { icon: ReactNode; label: string }) => (
    <Fragment>
        {payload.icon} {payload.label}
    </Fragment>
)

export const toSelectOptions = (payload: Object) =>
    Object.entries(payload).map(([key, value]) => ({
        value: key,
        label: typeof value === "string" ? value : toLabelWithIcon(value)
    }))

