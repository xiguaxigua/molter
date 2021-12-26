import { FC } from "react";
import MonacoEditor from "react-monaco-editor";

import "./style.scss";

const Code: FC<{}> = () => {
  return (
    <div className="comp-code">
      <MonacoEditor
        width="800"
        height="600"
        language="typescript"
        theme="vs-dark"
        value={`
// First line
function hello() {
	alert('Hello world!');
}
// Last line`}
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          theme: "vs-dark",
        }}
        onChange={(value) => {
          console.log("value", value);
        }}
        editorDidMount={(editor) => {
          editor.focus();
        }}
      />
    </div>
  );
};

export { Code };
