import Section from "./Section"
import CoreConcepts from "./CoreConcepts"
import { CORE_CONCEPTS } from "../data";
import   "../Components/CoreConcept.css"

export default function CoreConceptMain(){
    return (
      <Section id="core-concepts" text="Core Concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcepts {...conceptItem} />
          ))}
        </ul>
      </Section>
    );
}