export function Sidebar() {
    return (
        <div className="flex flex-col gap-8">
            <h2 className="uppercase text-neutral-300 text-2xl tracking-tight font-semibold text-start pr-6 pt-4">Your projects</h2>
            <button className="p-4 w-4/5 rounded-lg text-lg font-semibold text-stone-300 bg-stone-600 hover:bg-stone-500">+ Add Project</button>
        </div>
    )
}