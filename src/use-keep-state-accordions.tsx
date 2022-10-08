import { ReactNode, useState, Children, memo } from "react";

type AccordionProps = {
  id: string;
  label: ReactNode;
  children: ReactNode;
  show: (id: string) => boolean;
  handler: (id: string) => void;
};

const baseStyle = {
  maxHeight: 0,
  transition: "max-height 0.3s",
  overflow: "hidden"
};

const openStyle = {
  ...baseStyle,
  maxHeight: "100vh"
};

const Accordion = memo(
  ({ id, label, children, show, handler }: AccordionProps) => {
    const style = show(id) ? openStyle : baseStyle;
    return (
      <dl>
        <dt
          style={{ cursor: "pointer" }}
          onClick={() => {
            handler(id);
          }}
        >
          {label}
        </dt>
        {Children.map(children, (child) => (
          <dd style={style}>{child}</dd>
        ))}
      </dl>
    );
  }
);

export const useKeepStateAccordions = () => {
  const [state, setState] = useState<Record<string, boolean>>({});

  const handler = (key: string) => {
    const newState = { ...state };
    newState[key] = !newState[key];
    setState(newState);
  };

  const show = (id: string) => state[id];

  return {
    Accordion,
    show,
    handler
  };
};
