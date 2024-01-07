import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }
    : { children: React.ReactNode }
) {
    console.log("protectedRoute", children)
    const user = auth.currentUser;
    console.log("user", user)
    if (!user) {
        return <Navigate
            to="/login"
        />
    }
    return children;
}