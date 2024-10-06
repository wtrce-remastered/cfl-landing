import { Icon } from "shared/ui-kit"

const demoContent =
    "Helps companies deliver cargo to French by providing data to select the best freight offers and shipment tracking. Helps companies deliver cargo to French by providing data to select the best freight offers and shipment tracking."

export enum PossibilityKey {
    Compare,
    Manage,
    Support
}

export const PossibilityData = {
    [PossibilityKey.Compare]: {
        label: "Compare and book",
        icon: <Icon.Copy />,
        content: demoContent
    },
    [PossibilityKey.Manage]: {
        label: "Manage and track",
        icon: <Icon.TrendingUp />,
        content: demoContent
    },
    [PossibilityKey.Support]: {
        label: "Get expert support",
        icon: <Icon.Headphones />,
        content: demoContent
    }
}

export const Possibilities = Object.entries(PossibilityData)

