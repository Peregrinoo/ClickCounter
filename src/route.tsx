import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageCPS from "./Pages/CPS";
import NavBar from "./Components/General/Navbar";
import Aboutme from "./Pages/About";

const MyRoute = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route element={<PageCPS/>} path={'/'}/>
                <Route element={<Aboutme/>} path={'/about'}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoute;