import { Button } from "../../component"
import { useHistory } from "react-router-dom";

export const Logout = ({ children }) => {
    const history = useHistory();

    return (
        <>
            <div className="mt-3 text-right">
                <Button text={"Logout"} classes={"btn-danger "} click={(e) => {
                    debugger;
                    localStorage.clear();
                    history.push("/login")
                }}></Button>
            </div>
            {children}
        </>
    )
}