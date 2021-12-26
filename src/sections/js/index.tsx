import { useDispatch, useSelector } from "react-redux";
import { Code } from "../../components/code";
import { RootState } from "../../store";
import { setJs } from "../../store/features/code-slice";

const Js = () => {
  const { js } = useSelector((state: RootState) => state.code);
  const dispatch = useDispatch();
  return (
    <div className="section-js">
      <Code
        language="typescript"
        value={js}
        onChange={(code) => {
          dispatch(setJs({ code }));
        }}
      />
    </div>
  );
};

export { Js };
