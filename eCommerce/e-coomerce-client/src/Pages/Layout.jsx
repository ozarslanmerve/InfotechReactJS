import { Link, Outlet } from "react-router-dom";

function    Layout(){
    return(
        <>
         <h1>
                Layout
            </h1>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/login">Login</Link>
        <Outlet />
        </>
    )
}
export default Layout;