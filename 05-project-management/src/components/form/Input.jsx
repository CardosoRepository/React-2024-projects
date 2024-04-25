import { Label } from "./Label";

export function Input({ id, label, ...props }) {
    return (
        <div className="flex flex-col mb-4">
            <Label id={id} label={label} />
            <input
                className="bg-stone-200 p-2 w-full rounded outline-none shadow-sm shadow-stone-400 text-stone-600 text-lg"
                id={id}
                {...props}
            />
        </div>
    );
}
