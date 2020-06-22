import React from "react"
import HomePage from "./pages/HomePage/HomePage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ProductPage from "./pages/ProductsPage/ProductsPage"
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage"

const routes = [
    {
        path: "/",
        exact: true,
        main: ({match}) => <HomePage match={match}/>
    },
    {
        path: "/products/category/:id/:name",
        exact: false,
        main: ({match}) => <ProductPage match={match}/>
    },
    {
        path: "/products/:id/:tensanpham",
        exact: false,
        main: ({match}) => <ProductDetailPage match={match}/>
    },
    {
        path: "",
        exact: true,
        main: () => <NotFoundPage/>
    }
]

export default routes;