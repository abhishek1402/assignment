
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Login } from './pages';
import { useHistory } from "react-router-dom";
export const Routes = ({ login, authenticated }) => {
    const history = useHistory();

    return (
        < Switch >
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login" render={() => { return localStorage.getItem("authenticated") ? <Redirect to="/order" /> : <Login auth={(email, password) => login(email, password)} /> }}></Route>

        </Switch >
    )
}