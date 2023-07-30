import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home.jsx";
//import Details from "../../Pages/Details/Details.jsx";


const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            {/*<Route path={`details/:id`} element={<Details />} />*/}
        </Routes>
    );
};

export default Router;