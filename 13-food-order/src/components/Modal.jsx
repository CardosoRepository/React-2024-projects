import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

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
                    <button className="text-button" onClick={onClose}>Close</button>
                    <button className="button" onClick={onSubmit}>{onSubmitText}</button>
                </div>
            ) : (
                <div className="modal-actions">
                    <button className="button " onClick={onClose}>Okay</button>
                </div>
            )}
        </dialog>,
        document.getElementById("modal")
    );
}
