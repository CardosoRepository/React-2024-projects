import { useState } from "react";
import { Input } from "./Input";

export function StateLogin() {
    const [enteredValues, setEnteredValues] = useState({
        email: "",
        password: "",
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    });

    const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
    const passwordIsInvalid =
        didEdit.password && enteredValues.password.trim().length < 6;

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleInputChange(identifier, value) {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [identifier]: value,
        }));

        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: false,
        }));
    }

    function handleInputBlur(identifier) {
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: true,
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    error={emailIsInvalid && "Please enter a valid email."}
                    value={enteredValues.email}
                    onBlur={() => handleInputBlur("email")}
                    onChange={(event) =>
                        handleInputChange("email", event.target.value)
                    }
                />
                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    error={
                        passwordIsInvalid && "Please enter a valid password."
                    }
                    value={enteredValues.password}
                    onBlur={() => handleInputBlur("password")}
                    onChange={(event) =>
                        handleInputChange("password", event.target.value)
                    }
                />
            </div>

            <p className="form-actions">
                <button type="button" className="button button-flat">
                    Reset
                </button>
                <button type="submit" className="button" onClick={handleSubmit}>
                    Login
                </button>
            </p>
        </form>
    );
}
