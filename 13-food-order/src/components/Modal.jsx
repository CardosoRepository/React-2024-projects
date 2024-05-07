import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "./UI/Button";

export function Modal({ open, children, onClose, onSubmit, onSubmitText }) {
    const dialog = useRef();

    useEffect(() => {
        open ? dialog.current.showModal() : dialog.current.close();
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className="modal">
            {open ? children : null}
            {onSubmit ? (
                <div className="modal-actions">
                    <Button textOnly onClick={onClose}>Close</Button>
                    <Button onClick={onSubmit}>{onSubmitText}</Button>
                </div>
            ) : (
                <div className="modal-actions">
                    <Button onClick={onClose}>Okay</Button>
                </div>
            )}
        </dialog>,
        document.getElementById("modal")
    );
}
