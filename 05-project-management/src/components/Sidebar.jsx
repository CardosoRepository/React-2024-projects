export function Sidebar({ onClick, projects }) {
    return (
        <div className="flex flex-col gap-8">
            <h2 className="uppercase text-neutral-300 text-2xl tracking-tight font-semibold text-start pr-6 pt-4">
                Your projects
            </h2>
            <button
                className="p-4 w-4/5 rounded-lg text-lg font-semibold text-stone-300 bg-stone-600 hover:bg-stone-500"
                onClick={() => onClick(true)}
            >
                + Add Project
            </button>
            <ul>
                {projects.map((project, index) => {
                    return (
                        <li key={index} className="mb-2">
                            <span className="text-lg font-semibold cursor-pointer text-stone-300 hover:text-stone-400">
                                List of projects...
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
