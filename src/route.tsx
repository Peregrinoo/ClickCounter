import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageCPS from "./Pages/CPS";
import NavBar from "./Pages/Components/General/Navbar";

const MyRoute = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route element={<PageCPS/>} path={'/'}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoute;