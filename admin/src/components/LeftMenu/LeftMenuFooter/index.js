import React from "react";
import Wrapper, { A } from "./Wrapper";

function LeftMenuFooter({ version }) {
  return (
    <Wrapper>
      <div className="poweredBy">
        <p>
          Powered by{" "}
          <A
            key="website"
            href="https://github.com/GabriPires"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gabriel Pires
          </A>
        </p>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
