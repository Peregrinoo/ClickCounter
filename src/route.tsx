import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageCPS from "./Pages/CPS";

const MyRoute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<PageCPS/>} path={'/'}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoute;