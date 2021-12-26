import { useInit } from "../../hooks/init";
import "./style.scss";

const Topbar = () => {
  useInit();
  return <div className="section-topbar">topbar</div>;
};

export { Topbar };
