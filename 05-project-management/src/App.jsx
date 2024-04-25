import { NewProject } from "./components/Project/NewProject";
import { Sidebar } from "./components/Sidebar";

export function App() {

    return (
        <main className="flex h-screen my-8 gap-8">
            <Sidebar />
            <NewProject />
        </main>
    );
}
