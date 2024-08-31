import style from "./container.module.css";
import { Children } from "react";

export default function Container({ children }) {
  return <div className={style.containerDiv}>{children}</div>;
}
