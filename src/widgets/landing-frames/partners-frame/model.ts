import { ReactNode } from "react"

import { Icon } from "shared/ui-kit"
import { IconUI } from "shared/ui-kit/icon/model"

export interface Partner {
    logo: IconUI
    name: ReactNode
    sign: ReactNode
    description: ReactNode
}

export const Partners: Partner[] = [
    {
        logo: Icon.Peach,
        name: "Great Peaches Shipped",
        sign: "Nature’s Finest, Fresh to Your Doorstep.",
        description:
            "Great Peaches Shipped is a top-tier agricultural export company, known for delivering premium-quality peaches worldwide. Partnering with CargoFantasyLimited, they leverage our advanced cold-chain logistics to ensure their fresh produce arrives in perfect condition, no matter the distance. This collaboration allows Great Peaches Shipped to expand its reach into new markets, offering faster, eco-friendly deliveries with guaranteed freshness."
    },
    {
        logo: Icon.LogisticsBox,
        name: "NovaMarine Logistics",
        sign: "Sailing Toward a Sustainable Future.",
        description:
            "NovaMarine Logistics specializes in ocean freight services with a focus on sustainability. By integrating their solar-powered cargo ships with our cutting-edge aerial delivery solutions, we’ve created an efficient and eco-friendly hybrid shipping model. Together, we’re able to offer clients long-distance, environmentally responsible shipping with rapid, last-mile delivery through our fleet of drones and airships."
    },
    {
        logo: Icon.TechAir,
        name: "QuantumBox Technologies",
        sign: "Smart Packaging for a Seamless World.",
        description:
            "QuantumBox Technologies provides intelligent packaging solutions that enhance the preservation and tracking of sensitive goods. Through our partnership, CargoFantasyLimited benefits from QuantumBox’s self-regulating packaging, which maintains optimal conditions for perishable goods and high-value items. This ensures that shipments arrive undamaged and in perfect condition, even during long and complex delivery routes."
    }
]

