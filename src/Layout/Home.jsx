import { Outlet } from "react-router-dom";
import LeftNavbar from "../Components/Shared/LeftNavbar/LeftNavbar";
import TopNavbar from "../Components/Shared/TopNavbar/TopNavbar";

const Home = () => {
    return (
        <div className="flex gap-2 w-full h-full min-h-screen">
            <LeftNavbar></LeftNavbar>
            <div className="w-full h-full relative flex flex-col">
                <TopNavbar></TopNavbar>
              
                    <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;