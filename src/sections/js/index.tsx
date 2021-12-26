import { Code } from "../../components/code";

const Js = () => {
  return (
    <div className="section-js">
      <Code
        language="typescript"
        value={`const a: number = 1;
function b () { return <div /> }`}
        onChange={() => {}}
      />
    </div>
  );
};

export { Js };
