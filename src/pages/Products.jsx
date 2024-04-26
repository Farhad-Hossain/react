import { NavLink, Outlet } from "react-router-dom";
import Layout from "../Layout";
const Products = ()=> {
    return (
        <Layout>
            <input type="search" placeholder="Search Products" />
            <NavLink to='new'>New Products</NavLink>
            <NavLink to='featured'>Featured Products</NavLink>
            <Outlet/>
        </Layout>
    );
}
export default Products;