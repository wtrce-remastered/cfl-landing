import { createBrowserRouter } from "react-router-dom"

import { RouterPaths } from "shared/config"

import { LandingPage } from "pages/landing/index.ts"

import { PublicGuard } from "./privacy.tsx"

export const Router = createBrowserRouter([
    {
        element: <PublicGuard />,
        children: [
            {
                element: <LandingPage />,
                path: RouterPaths.base
            }
        ]
    }
])
