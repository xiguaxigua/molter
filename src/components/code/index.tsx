import { FC } from "react";
import MonacoEditor from "react-monaco-editor";
import * as monaco from "monaco-editor";

import "./style.scss";

monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
  target: monaco.languages.typescript.ScriptTarget.Latest,
  allowNonTsExtensions: true,
  moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
  module: monaco.languages.typescript.ModuleKind.CommonJS,
  noEmit: true,
  esModuleInterop: true,
  jsx: monaco.languages.typescript.JsxEmit.React,
  tsx: monaco.languages.typescript.JsxEmit.React,
  reactNamespace: "React",
  allowJs: true,
  typeRoots: ["node_modules/@types"],
});

monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
  noSemanticValidation: false,
  noSyntaxValidation: true,
});

interface CodeProps {
  /** 语言 */
  language: "javascript" | "typescript" | "html" | "css";
  /** 代码内容 */
  value: string;
  /** 相应变更 */
  onChange: (value: string) => void;
}

const Code: FC<CodeProps> = ({ language, value, onChange }) => {
  return (
    <div className="comp-code">
      <MonacoEditor
        theme="vs-dark"
        language={language}
        value={value}
        onChange={onChange}
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          theme: "vs-dark",
          minimap: {
            enabled: false,
          },
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export { Code };
