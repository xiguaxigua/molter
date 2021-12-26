import { useDispatch, useSelector } from "react-redux";
import { Code } from "../../components/code";
import { RootState } from "../../store";
import { setCss } from "../../store/features/code-slice";

const Css = () => {
  const { css } = useSelector((state: RootState) => state.code);
  const dispatch = useDispatch();
  return (
    <div className="section-css">
      <Code
        language="css"
        value={css}
        onChange={(code) => {
          dispatch(setCss({ code }));
        }}
      />
    </div>
  );
};

export { Css };
