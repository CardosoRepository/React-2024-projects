import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ open, children, className = "", onClose }) {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;
        if (open) {
            modal.showModal();
        }
        return () => modal.close();
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
            {open ? children : null}
        </dialog>,
        document.getElementById("modal")
    );
}
