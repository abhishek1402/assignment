import { useState } from "react";
import { Input, Button } from "../../component"
import { emailValidatior, passwordValidator } from "../../util/validator"
import { useHistory } from "react-router-dom";

export const Login = ({ auth }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const history = useHistory();


    const onSubmit = async () => {
        if (!email || !password) {
            alert("Email OR Password can not be empty")
        }
        if (emailErr || passwordErr) {
            alert("Email OR Password Not Valid")
        }
        let loginSuccuess = await auth(email, password);
        if (loginSuccuess)
            history.push('order')

    }
    return (
        <div className="d-flex h-100 align-items-center justify-content-center " data-test="login-cmp">

            <div className="col-6 text-left border p-5">
                <h2 className="text-center mb-4 text-danger text-uppercase">Login</h2>
                <Input placeholder={"Enter Email"} label={"Email"} change={(value) => {
                    if (!emailValidatior(value)) setEmailErr("Email not valid")
                    else { setEmailErr(""); setEmail(value) }
                }} error={emailErr} />
                <Input placeholder={"Enter Password"} label={"Password"}
                    change={(value) => {
                        if (!passwordValidator(value)) setPasswordErr("Password Not Valid")
                        else { setPasswordErr(""); setPassword(value) }
                    }} error={passwordErr}
                />
                <Button text={"Submit"} click={() => onSubmit()} classes={"btn-success btn-block"} />
            </div>
        </div>
    )
}