import { useEffect, useState } from "react";
import ctx from "../Canvas";
import gco, { BlendMode } from "../../Const/gco";
import styled from "styled-components";
import classNames from 'classnames'

const MD = styled.div`
text-align: center;
font-size: 12px;
  dl{
    border:1px solid #c1f3a1;
    margin: 10px;
    dt{
      font-weight: bolder;
    }
    dd{
      display: inline-block;
      /* width: 100px; */
      border: 1px solid #58c3c5;
      margin: 5px;
      padding: 5px;
      cursor: pointer;
    }
  }
  .l1 {
    background-color: #f4d5d5;
  }
  .l2 {
    background-color: #c1f3a1;
  }
  .isBM{
    font-size: 13px;
    font-weight:bolder;
    text-decoration: underline;
  }
`;

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  const [l1, setl1] = useState(0);
  const [l2, setl2] = useState(0);
  ctx.fillStyle = "#8D574A";
  const path = new Path2D()
  path.rect(0, 0, 800, 800)
  ctx.fill(path)

  ctx.save();
  ctx.globalCompositeOperation = gco[l1];
  ctx.fillStyle = "#1717E2";
  const path1 = new Path2D()
  path1.rect(100, 100, 300, 300)
  ctx.fill(path1)
  // ============
  ctx.save();
  ctx.globalCompositeOperation = gco[l2];
  ctx.fillStyle = "#ffffff";
  const path2 = new Path2D()
  path2.rect(150, 150, 400, 100)
  ctx.fill(path2)
  ctx.restore();
  // ============
  ctx.restore();
  const changeGCOL1 = (i: number) => {
    setl1(i === l1 ? 0 : i);
  };
  const changeGCOL2 = (i: number) => {
    setl2(i === l2 ? 0 : i);
  };
  // console.log(gco.length, BlendMode.length)
  const isBlendMode = (curGco: string) => {
    let isBM = false;
    for (let i = 0; i < BlendMode.length; i++) {
      const gco = BlendMode[i].toLowerCase().replace("_", "-");
      if (gco === curGco) {
        isBM = true;
        break
      }
    }
    return isBM;
  }
  return (
    <MD>
      <dl>
        <dt>图层一模式</dt>
        {gco.map((item, index) => {
          return (
            <dd onClick={() => { changeGCOL1(index) }} key={index} className={classNames({ 'l1': item === gco[l1], 'isBM': isBlendMode(item) })}>
              {item}
            </dd>
          );
        })}
      </dl>
      <dl>
        <dt>图层二模式</dt>
        {gco.map((item, index) => {
          return (
            <dd onClick={() => { changeGCOL2(index) }} key={index} className={classNames({ 'l2': item === gco[l2], 'isBM': isBlendMode(item) })}>
              {item}
            </dd>
          );
        })}
      </dl>
    </MD>
  );
};

export default App;
