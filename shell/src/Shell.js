import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Init from "./Init";
// import DashboardService from 'Dashboard/App'

const DashboardService = React.lazy(() => import("Dashboard/App"));
const OrderService = React.lazy(() => import("Order/App"));
const RegisterPage = React.lazy(() => import("Register/App"));
export default function Shell() {
    return (
        // <Suspense  fallback='Loading Button'>

        // <DashboardService/>

        // </Suspense> 
        <BrowserRouter>

            <Suspense fallback="Loading" >
                <Switch>
                    {/* <Route path="hai/*" element={<Init />} /> */}

                    <Route path="/dashboard"> <Suspense><DashboardService /></Suspense> </Route>
                    <Route path="/register"> <Suspense><RegisterPage /></Suspense> </Route>
                    <Route path="/order"> <Suspense><OrderService /></Suspense> </Route>
                    <Route exact path="/">
                        <Redirect to={<Suspense>
                            <DashboardService />
                        </Suspense>}>

                        </Redirect>
                    </Route>

                    {/* <Route path="/orders/*" component={<OrderService />} />
                    <Route path="/register/*" component={<RegisterPage />} /> */}
                    {/* <Route
                path="*"
                element={<Link to="dashboard/*" replace />}
            /> */}
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}