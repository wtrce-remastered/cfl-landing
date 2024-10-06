import { envConfig } from "shared/config"
import { Icon } from "shared/ui-kit"

export const ContactData = [
    { key: "address", icon: Icon.MapPin, label: "Address", value: envConfig.companyAddress },
    { key: "phone", icon: Icon.Phone, label: "Phone", value: envConfig.companyPhone },
    { key: "email", icon: Icon.Mail, label: "Email", value: envConfig.companyEmail },
    { key: "support-email", icon: Icon.Headphones, label: "Support", value: envConfig.companySupport }
]

