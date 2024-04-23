import logo from "../assets/logo.png";

export function Header() {
    return (
        <header className="flex flex-col items-center my-8 md:mb-16">
            <img
                src={logo}
                alt="A canvas"
                className="mb-8 size-44 object-contain"
            />
            <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
                ReactArt
            </h1>
            <p className="text-stone-500">
                A community of artists and art-lovers.
            </p>
        </header>
    );
}
