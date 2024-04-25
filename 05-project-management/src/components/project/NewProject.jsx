import { Input } from "../form/Input";

export function NewProject() {
    return (
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>
            <div>
                <Input label="title" />
                <Input label="Description" textarea rows={5}/>
                <Input label="Due Date" />
            </div>
        </div>
    );
}
