import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn } from "../../Redux/Auth/selectors";
export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    return { isLoggedIn, user };
};