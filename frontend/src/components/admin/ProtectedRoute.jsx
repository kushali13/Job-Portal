import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {user} = useSelector(store=>store.auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user){
            navigate("/login");
        }
    },[user, navigate]);

    return user ? children : null;
};
export default ProtectedRoute;