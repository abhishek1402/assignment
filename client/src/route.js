
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Login, OrderView, OrderEdit } from './pages';
import { Logout } from "./layout/logout/logout.component";
export const Routes = ({ login, authenticated }) => {

    return (
        < Switch >
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login" render={() => { return localStorage.getItem("authenticated") ? <Redirect to="/order" /> : <Login auth={(email, password) => login(email, password)} /> }}></Route>
            <Route exact path="/order" render={() => { return localStorage.getItem("authenticated") ? <Logout><OrderView /></Logout> : <Redirect to="/login" /> }} />
            <Route exact path="/order/:orderId" render={() => { return localStorage.getItem("authenticated") ? <Logout><OrderEdit /></Logout> : <Redirect to="/login" /> }} />
        </Switch >
    )
}