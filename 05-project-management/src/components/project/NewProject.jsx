import { Input } from "../form/Input";
import { Textarea } from "../form/Textarea";

export function NewProject({ onClick }) {
    return (
        <div className="flex flex-col gap-8 w-full justify-center">
            <form className="w-4/5">
                <div className="flex justify-end gap-8">
                    <button
                        className="p-2 px-6 font-semibold text-stone-600 hover:text-stone-500"
                        onClick={() => onClick(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="py-2 px-6 text-xl rounded-lg text-stone-300 bg-stone-600 hover:bg-stone-500"
                        onClick={() => onClick(true)}
                    >
                        Save
                    </button>
                </div>
                <Input id="title" label="title" type="text" />
                <Textarea id="description" label="description" type="text" />
                <Input id="dueDate" label="due date" type="date" />
            </form>
        </div>
    );
}
