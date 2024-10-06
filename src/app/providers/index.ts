import compose from "compose-function"

import { withAdaptive } from "app/providers/with-adaptive"

import { withTheme } from "./with-theme"

export const withProviders = compose(withAdaptive, withTheme)

