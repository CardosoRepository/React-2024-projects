import { useRef, useState } from "react";
import { NewProject } from "./components/project/NewProject";
import { NoProject } from "./components/project/NoProject";
import { Sidebar } from "./components/Sidebar";

const test = [1, 2, 3, 4];

function App() {
    const [isNewProject, setIsNewProject] = useState(false);

    const form = useRef();

    function handleIsNewProject(newProject) {
        setIsNewProject(newProject);
    }

    return (
        <>
        <div className="flex flex-col h-screen">
            <div className="h-[8vh]"></div>
            <div className="flex flex-1 overflow-y-auto">
                <div className="w-[30%] p-12 rounded-se-2xl bg-gradient-to-b from-stone-800 to-stone-700">
                    <Sidebar onClick={handleIsNewProject} projects={test} />
                </div>
                <div className="w-full p-12">
                    {isNewProject ? <NewProject ref={form} onClick={handleIsNewProject} /> : <NoProject onClick={handleIsNewProject} />}
                </div>
            </div>
        </div>
        </>
    );
}

export default App;
