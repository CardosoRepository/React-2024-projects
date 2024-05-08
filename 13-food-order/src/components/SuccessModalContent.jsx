import { Button } from "./UI/Button";

export function SuccessModalContent({ handleClose }) {
    return (
        <>
            <h2>Success</h2>
            <p>Your order was submmitted successfully.</p>
            <p>
                We will get back to you with more details via email within the
                next few minutes.
            </p>
            <p className="modal-actions">
                <Button onClick={handleClose}>Okay</Button>
            </p>
        </>
    );
}
