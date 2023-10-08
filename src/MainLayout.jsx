import { Outlet } from "react-router-dom";
import Header from "./Header";


const MainLayout = () => {
    return (
        <div className="m-4">
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;