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
        tasks: [
            {
                id: "9c5b4807-c711-43cc-b9ff-fa43a38ac113",
                projectId: "b89d11db-ef26-4af7-aef1-6764b0cef6f4",
                text: "Task 1",
            },
        ],
    });

    const selectedProject = projectsState.projects.find(
        (project) => project.id === projectsState.selectedProjectId
    );

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

    function handleDeleteProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(
                    (project) => project.id !== prevState.selectedProjectId
                ),
            };
        });
    }

    function handleAddTask(text) {
        setProjectsState((prevState) => {
            const taskId = uuidv4();
            const newTask = {
                text: text,
                projectId: prevState.selectedProjectId,
                id: taskId,
            };
            return {
                ...prevState,
                tasks: [newTask, ...prevState.tasks],
            };
        });
    }

    function handleDeleteTask(id) {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter((task) => task.id !== id),
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
                    <ProjectDetails
                        project={selectedProject}
                        onDelete={handleDeleteProject}
                        onAddTask={handleAddTask}
                        onDeleteTask={handleDeleteTask}
                        tasks={projectsState.tasks}
                    />
                )}
            </div>
        </main>
    );
}
