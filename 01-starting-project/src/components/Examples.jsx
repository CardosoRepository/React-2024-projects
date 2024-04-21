import { useState } from "react";
import { TabButton } from "./TabButton";
import { Section } from "./Section";
import { EXAMPLES } from "../data";

export function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(null);
    let tabContent = <p>Please select a topic.</p>;

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section id="examples" title="Examples">
            <menu>
                <TabButton
                    isSelected={selectedTopic === "components"}
                    onClick={() => handleSelect("components")}
                >
                    Component
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "jsx"}
                    onClick={() => handleSelect("jsx")}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "props"}
                    onClick={() => handleSelect("props")}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "state"}
                    onClick={() => handleSelect("state")}
                >
                    State
                </TabButton>
            </menu>
            {tabContent}
        </Section>
    );
}
