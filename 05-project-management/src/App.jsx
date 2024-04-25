import { NewProject } from "./components/project/NewProject";
import { NoProject } from "./components/project/NoProject";
import { Sidebar } from "./components/Sidebar";

function App() {
    return (
        <>
        <div className="flex flex-col h-screen">
            <div className="h-[8vh]"></div>
            <div className="flex flex-1 overflow-y-auto">
                <div className="w-[30%] p-12 rounded-se-2xl bg-gradient-to-b from-stone-800 to-stone-700">
                    <Sidebar />
                </div>
                <div className="w-full p-12">
                    <NoProject />
                    {/* <NewProject /> */}
                </div>
            </div>
        </div>
        </>
    );
}

export default App;
