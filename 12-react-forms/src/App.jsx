import Header from "./components/Header.jsx";
import { Signup } from "./components/Signup.jsx";
import { StateLogin } from "./components/StateLogin.jsx";

export function App() {
    return (
        <>
            <Header />
            <main>
                <StateLogin />
            </main>
        </>
    );
}
