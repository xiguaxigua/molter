import { useSelector } from "react-redux";
import { Runner } from "../../components/runner";
import { RootState } from "../../store";
import useDebounce from "react-use/lib/useDebounce";
import { useState } from "react";

const Playground = () => {
  const sourceCode = useSelector((state: RootState) => state.code);
  const [code, setCode] = useState(sourceCode);
  useDebounce(
    () => {
      setCode(sourceCode);
    },
    500,
    [sourceCode]
  );
  return (
    <div className="section-playground">
      <Runner code={code} />
    </div>
  );
};

export { Playground };
