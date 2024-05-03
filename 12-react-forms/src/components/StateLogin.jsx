import { Input } from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export function StateLogin() {
    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError,
    } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError,
    } = useInput("", (value) => hasMinLength(value, 6));

    function handleSubmit(event) {
        event.preventDefault();

        if (emailHasError || passwordHasError) {
            return;
        }

        console.log(emailValue, passwordValue);
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
                    error={emailHasError && "Please enter a valid email."}
                    value={emailValue}
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                />
                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    error={passwordHasError && "Please enter a valid password."}
                    value={passwordValue}
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
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
