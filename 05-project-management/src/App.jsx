import { useState } from "react";
import { NewProject } from "./components/Project/NewProject";
import { Sidebar } from "./components/Sidebar";
import { NoProjectSelected } from "./components/project/NoProjectSelected";
import uuidv4 from "node-uuid";

export function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
    });

    function handleStartAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectsState((prevState) => {
            const newProject = {
                ...projectData,
                id: uuidv4(),
            };
            return {
                ...prevState,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    console.log(projectsState);

    return (
        <main className="flex flex-col h-screen">
            <div className="my-8"></div>
            <div className="flex h-full gap-8">
                <Sidebar onStartAddProject={handleStartAddProject} />

                {projectsState.selectedProjectId === null ? (
                    <NewProject onAdd={handleAddProject}/>
                ) : (
                    <NoProjectSelected
                        onStartAddProject={handleStartAddProject}
                    />
                )}
            </div>
        </main>
    );
}
