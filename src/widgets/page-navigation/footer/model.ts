import { envConfig } from "shared/config"
import { IconKey } from "shared/ui-kit"

export const menuLinks = ["For Importers and Exporters", "For Forwarders and Logistics Providers", "For Carriers", "Useful Resources", "About the project"]

export const servicesLinks: { label: string; icon: IconKey }[] = [
    { label: "Online Freight", icon: "Package" },
    { label: "Log In to Your Account", icon: "User" },
    { label: "Contact Us", icon: "PhoneOutgoing" }
]

export const contacts = [
    {
        label: "Address",
        value: envConfig.companyAddress
    },
    {
        label: "Phone",
        value: envConfig.companyPhone
    },
    {
        label: "Email",
        value: envConfig.companyEmail
    }
]

