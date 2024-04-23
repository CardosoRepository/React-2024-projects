import { Header } from "./components/Header/Header";
import { CoreConcepts } from "./components/CoreConcepts";
import { Examples } from "./components/Examples";

export function App() {
    return (
        <div>
            <Header />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </div>
    );
}
