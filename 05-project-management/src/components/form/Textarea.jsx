import { Label } from "./Label";

export function Textarea({ id, label, type }) {
    return (
        <div className="flex flex-col mb-4">
            <Label id={id} label={label} />
            <textarea
                id={id}
                className="bg-stone-200 p-2 w-full rounded outline-none shadow-sm shadow-stone-400 text-stone-600 text-lg"
                rows={5}
                type={type}
            />
        </div>
    );
}
