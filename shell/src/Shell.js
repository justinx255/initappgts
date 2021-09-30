import React from "react";
import { BrowserRouter as Router, Switch, Route, Navigate } from "react-router-dom";
import Init from "./Init";



const DashboardService = React.lazy(() => import("dashboard/TodayWidget"));
const OrderService = React.lazy(() => import("order/TodayWidget"));
const RegisterPage = React.lazy(() => import("register/TodayWidget"));
export default function Shell() {
    return (<Router>

            <React.Suspense fallback={"Loading"}>
                <Switch>
                    <Route path="hai/*" element={<Init />} />
                    <Route path="dashboard/*" element={<DashboardService />} />
                    <Route path="orders/*" element={<OrderService />} />
                    <Route path="register/*" element={<RegisterPage />} />
                    {/* <Route
                            path="*"
                            element={<Navigate to="/dashboard" replace />}
                        /> */}
                </Switch>
            </React.Suspense>
    </Router>)
}