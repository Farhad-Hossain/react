import { useParams } from "react-router-dom";
import Layout from "../Layout";
const UserDetail = ()=> {
    const params = useParams()
    const userId = params.userId
    return (
        <>
        <p>User details of user {userId}</p>
        </>
    );
}
export default UserDetail;