import { useDispatch, useSelector } from "react-redux";
import { Code } from "../../components/code";
import { RootState } from "../../store";
import { setHtml } from "../../store/features/code-slice";

const Html = () => {
  const { html } = useSelector((state: RootState) => state.code);
  const dispatch = useDispatch();
  return (
    <div className="section-html">
      <Code
        language="html"
        value={html}
        onChange={(code) => {
          dispatch(setHtml({ code }));
        }}
      />
    </div>
  );
};

export { Html };
