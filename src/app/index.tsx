import { RouterProvider } from "react-router-dom"

import { withProviders } from "app/providers"
import { Router } from "app/router"

import "app/styles/global.scss"

const App = () => <RouterProvider router={Router} />

export default withProviders(App)
