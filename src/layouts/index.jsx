
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <div className="min-h-screen">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
