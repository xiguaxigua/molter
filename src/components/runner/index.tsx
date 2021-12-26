import { FC, useEffect, useRef } from "react";

import "./style.scss";

interface RunnerProps {
  code: {
    html?: string;
    css?: string;
    js?: string;
  };
}

const Runner: FC<RunnerProps> = ({
  code: { html = "", css = "", js = "" },
}) => {
  const iframeEl = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iDocument = iframeEl.current!.contentDocument!;
    iDocument.head.innerHTML += `<style>${css}</style>`;
    iDocument.body.innerHTML += html;
    const script = iDocument.createElement("script");
    script.innerHTML = js;
    iDocument.body.appendChild(script);
  }, [html, css, js]);

  return (
    <iframe
      className="comp-runner"
      ref={iframeEl}
      title="runner"
      key={`${html}-${css}-${js}`}
    />
  );
};

export { Runner };
