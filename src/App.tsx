import "./styles.css";
import { useKeepStateAccordions } from "./use-keep-state-accordions";

export default function App() {
  const { Accordion, ...accordionProps } = useKeepStateAccordions();

  return (
    <div className="App">
      <Accordion id="testA" label="TestA" {...accordionProps}>
        AAAAA
      </Accordion>
      <Accordion id="testB" label="TestB" {...accordionProps}>
        <span>BBBBB</span>
        <span>BBBBB</span>
        <Accordion id="testE" label="TestE" {...accordionProps}>
          <span>EEEEE</span>
          <span>EEEEE</span>
        </Accordion>
      </Accordion>
      <Accordion id="testC" label="TestC" {...accordionProps}>
        CCCCC
      </Accordion>
      <Accordion id="testD" label="TestD" {...accordionProps}>
        DDDDD
      </Accordion>
    </div>
  );
}
