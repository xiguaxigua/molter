import { FC, useEffect, useRef } from "react";
import { editor } from "monaco-editor";
import "./style.scss";

const Code: FC<{}> = () => {
  const codeEl = useRef(null);

  useEffect(() => {
    editor.create(codeEl.current!, {
      value: "function hello() {\n\talert('Hello world!');\n}",
      language: "javascript",
    });
  }, []);

  return <div ref={codeEl} className="comp-code"></div>;
};

export { Code };
