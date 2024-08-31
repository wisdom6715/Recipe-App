import { Children } from "react";
import style from "./innercontainer.module.css";

export default function InnerContainer({ children }) {
  return <div className={style.innerContainer}>{children}</div>;
}

// export default function Container({ children }) {
//     return <div className={style.containerDiv}>{children}</div>;
//   }
