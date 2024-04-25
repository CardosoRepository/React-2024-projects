import { useState } from "react";
import { NewProject } from "./components/Project/NewProject";
import { Sidebar } from "./components/Sidebar";
import { NoProjectSelected } from "./components/project/NoProjectSelected";
import uuidv4 from "node-uuid";
import { ProjectDetails } from "./components/project/ProjectDetails";

export function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [
            {
                description: "Lorem ipsum",
                dueDate: "2024-04-25",
                id: "b89d11db-ef26-4af7-aef1-6764b0cef6f4",
                title: "Project title",
            },
            {
                description: "...Lorem ipsum...",
                dueDate: "2024-04-20",
                id: "2131231231231",
                title: "Second project",
            },
        ],
    });

    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

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
            const projectId = uuidv4();
            const newProject = {
                ...projectData,
                id: projectId,
            };
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    function handleCancel() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            };
        });
    }

    function handleSelectProject(id) {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    }

    return (
        <main className="flex flex-col h-screen">
            <div className="my-8"></div>
            <div className="flex h-full gap-8">
                <Sidebar
                    onStartAddProject={handleStartAddProject}
                    projects={projectsState.projects}
                    onSelectProject={handleSelectProject}
                    selectedProjectId={projectsState.selectedProjectId}
                />

                {projectsState.selectedProjectId === null ? (
                    <NewProject
                        onAdd={handleAddProject}
                        onCancel={handleCancel}
                    />
                ) : projectsState.selectedProjectId === undefined ? (
                    <NoProjectSelected
                        onStartAddProject={handleStartAddProject}
                    />
                ) : (
                    <ProjectDetails project={selectedProject} />
                )}
            </div>
        </main>
    );
}
