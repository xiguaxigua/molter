import { Code } from "../../components/code";

const Css = () => {
  return (
    <div className="section-css">
      <Code language="css" value=".a { width: 100px }" onChange={() => {}} />
    </div>
  );
};

export { Css };
