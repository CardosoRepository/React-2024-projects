export function Label({ label, id }) {
    return (
        <label
            className="text-stone-700 uppercase font-bold text-lg mb-2"
            htmlFor={id}
        >
            {label}
        </label>
    );
}
