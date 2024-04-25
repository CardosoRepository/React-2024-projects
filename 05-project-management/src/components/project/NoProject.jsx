export function NoProject() {
    return (
        <div className="flex flex-col gap-8 items-center pt-20">
            <img className="w-28 h-32" src="/logo.png" alt="clipboard" />
            <h1 className="text-stone-700 font-semibold text-3xl">No project Selected</h1>
            <h2 className="text-stone-500 tracking-wider text-xl font-semibold">Select a project or get started with a new one</h2>
            <button className="py-4 px-6 text-xl w-72 rounded-lg text-stone-300 bg-stone-600 hover:bg-stone-500">Create new project</button>
        </div>
    )
}