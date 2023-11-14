import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { CreateDish } from "../pages/CreateDish";
import { EditDish } from "../pages/EditDish";
import { Details } from "../pages/Details";
import { MenuMobile } from "../pages/MenuMobile";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createdish" element={<CreateDish />} />
            <Route path="/editdish/:id" element={<EditDish />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/menumobile" element={<MenuMobile />} />
        </Routes>
    )
}
