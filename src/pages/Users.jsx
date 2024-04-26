import { Outlet, useSearchParams } from "react-router-dom";
import Layout from "../Layout";
const Users = ()=> {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') == 'active';
    return (
        <Layout>
        <ol>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
        </ol>
        <Outlet />
        <div>
            <button onClick={()=> setSearchParams({ filter: 'active' })}>Active Users</button>
            {showActiveUsers && <h3>Active users are shown</h3>}
            <button onClick={()=> setSearchParams({})}>Reset Filters</button>
        </div>
        </Layout>
    );
}
export default Users;