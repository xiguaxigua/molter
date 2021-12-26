import { useSelector } from "react-redux";
import { Runner } from "../../components/runner";
import { RootState } from "../../store";

const Playground = () => {
  const { html, css, js } = useSelector((state: RootState) => state.code);
  return (
    <div className="section-playground">
      <Runner code={{ html, css, js }} />
    </div>
  );
};

export { Playground };
