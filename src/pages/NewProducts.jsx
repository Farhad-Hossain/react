import { Outlet } from "react-router-dom";
import Layout from "../Layout";
const NewProducts = () => {
    return (
        <>
            <h1>New Products Page</h1>
            <Outlet />
        </>
    );
}
export default NewProducts;