import { useState } from "react";

export function Player({ initialName, symbol }) {
    const [isEditing, setIsEdit] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEdit(isEditing => !isEditing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {isEditing ? (
                    <input type="text" value={playerName} onChange={handleChange} required />
                ) : (
                    <span className="player-name">{playerName}</span>
                )}

                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}
