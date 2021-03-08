
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Login } from './pages';
export const Routes = ({ login }) => {
    return (
        < Switch >
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login" render={() => { return localStorage.getItem("authenticated") ? <Redirect to="/order" /> : <Login auth={(email, password) => login(email, password)} /> }}></Route>
            <Route exact path="/order" render={() => { return localStorage.getItem("authenticated") ? <Logout><OrderView /></Logout> : <Redirect to="/login" /> }} />
        </Switch >
    )
}