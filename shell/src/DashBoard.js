import React, { useEffect, UseRef } from "react";
import {mount} from 'Dashboard/App'
// const DashboardService = React.lazy(() => import("Dashboard/App"));
import { useHistory } from "react-router-dom";
export default function Dashboard() {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });
        history.listen(onParentNavigate);
    }, [])
    return <div ref={ref} />
}