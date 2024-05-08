export function Error({ title, message }) {
    return (
        <div className="error text-center">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}