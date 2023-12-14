import {useState} from "react";
import Section from "./Section";
import TabButton from "./TabButton"
import { EXAMPLES } from "../data"; 

export default function Examples(){
    const [content, setContent] = useState(false);
    function clickHandler(selectedButton) {
      setContent(selectedButton);
    }
    return (
      <Section id="examples" text="Examples">
        <menu>
          <TabButton
            isSelected={content === "components"}
            onSelect={() => clickHandler("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={content === "jsx"}
            onSelect={() => clickHandler("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={content === "props"}
            onSelect={() => clickHandler("props")}
          >
            {" "}
            Props 
          </TabButton>
          <TabButton
            isSelected={content === "state"}
            onSelect={() => clickHandler("state")}
          >
            State
          </TabButton>
        </menu>
        {content ? (
          <div id="tab-content">
            <h3>{EXAMPLES[content].title}</h3>
            <p>{EXAMPLES[content].description}</p>
            <pre>
              <code>{EXAMPLES[content].code}</code>
            </pre>
          </div>
        ) : (
          <h2>Select element.</h2>
        )}
      </Section>
    );
}