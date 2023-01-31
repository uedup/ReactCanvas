import { useEffect, useState } from "react";
import ctx from "../Canvas";
import gco, { BlendMode } from "../../Const/gco";
import styled from "styled-components";
import classNames from 'classnames'
const MD = styled.div`
  .l1 {
    background-color: #f4d5d5;
  }
  .l2 {
    background-color: #c1f3a1;
  }
`;
type AppProps = {};

export const App: React.FC<AppProps> = () => {
  const [l1, setl1] = useState(0);
  const [l2, setl2] = useState(0);
  // ctx.fillStyle = "#C6F687";
  // ctx.fillRect(0, 0, 800, 800);
  ctx.save();
  ctx.globalCompositeOperation = gco[l1];
  ctx.fillStyle = "#e7e7e7";
  ctx.fillRect(200, 200, 400, 400);
  // ============
  ctx.save();
  ctx.globalCompositeOperation = gco[l2];
  ctx.fillStyle = "#e7e7e7";
  ctx.fillRect(400, 400, 500, 100);
  ctx.restore();
  // ============
  ctx.restore();
  const changeGCOL1 = () => {
    setl1(l1 < gco.length - 1 ? l1 + 1 : 0);
  };
  const changeGCOL2 = () => {
    setl2(l2 < gco.length - 1 ? l2 + 1 : 0);
  };

  return (
    <MD>
      <dl>
        <dt>混合模式</dt>
        {BlendMode.map((item, index) => {
          const cur = item.toLowerCase().replace("_", "-");
          console.log(cur, gco[l1])
          return (
            // <dd key={index} className={cur === gco[l1] ? "l1" : ""}>
            <dd key={index} className={classNames({'l1':cur === gco[l1],'l2':cur === gco[l2]})}>
              {item}
            </dd>
          );
        })}
      </dl>
      <div>
        <button onClick={changeGCOL1}>
          改变图层1：{l1}({gco[l1]})
        </button>
        <button onClick={changeGCOL2}>
          改变图层2：{l2}({gco[l2]})
        </button>
      </div>
    </MD>
  );
};

export default App;
