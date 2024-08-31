import style from "./navBar.module.css";
export default function Nav() {
  return (
    <div className={style.header}>
      <img
        src="/Premium Photo _ Hamburger on a table on a white background.jpeg"
        alt=""
        height={30}
      />
      <h1>FlavorCraft</h1>
    </div>
  );
}
