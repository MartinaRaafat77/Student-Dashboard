import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}
const RequireUser: React.FC<Props> =({children}) =>{
    const loggedIn =localStorage.getItem('loggedIn');
    return loggedIn ? <>{children}</> :<Navigate to="/" />;
};
export default RequireUser;