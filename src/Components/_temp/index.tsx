import { useEffect, useState } from "react";
import ctx from "../Canvas";
type AppProps = {};

export const App: React.FC<AppProps> = () => {
  console.log(ctx);
  return <div>hello</div>;
};

export default App;
