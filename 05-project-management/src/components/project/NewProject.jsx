export function NewProject() {
    return (
        <div className="flex flex-col gap-8 w-full items-center justify-center">
            <form>
                <div className="flex flex-col">
                    <label className="text-stone-700 uppercase font-bold text-lg" htmlFor="title">Title</label>
                    <input className="bg-stone-200 p-2 w-full" type="text" id="title" />
                </div>
            </form>
        </div>
    )
}