import { NavLink } from "react-router-dom";

function App(props) {
  let app = props.app;

  function playCoolAnimationPls() {
    document.body.classList.remove("pageBack");
    document.body.classList.add("pageFor");
  }

  return (
    <li
      className={
        props.index <= 4 ? "first" : app.name == "none" ? "phantom" : ""
      }
    >
      {app.name == "none" ? (
        <a> </a>
      ) : app.url ? (
        <a href={app.url} className="openlink">
          <img
            src={app.icon ? app.icon : "./pages/" + app.name + "/icon.svg"}
          />{" "}
          {props.folder ? (
            ""
          ) : (
            <p> {app.name[0].toUpperCase() + app.name.substring(1)} </p>
          )}{" "}
        </a>
      ) : app.special_page ? (
        <NavLink to={"/" + app.special_page} onClick={playCoolAnimationPls}>
          <img
            src={app.icon ? app.icon : "./pages/" + app.name + "/icon.svg"}
          />{" "}
          {props.folder ? (
            ""
          ) : (
            <p> {app.name[0].toUpperCase() + app.name.substring(1)} </p>
          )}{" "}
          </NavLink>
      ) : (
        <NavLink to={"/blog?id=" + app.name} onClick={playCoolAnimationPls}>
          <img src={"./pages/" + app.name + "/icon.svg"} />{" "}
          {props.folder ? (
            ""
          ) : (
            <p> {app.name[0].toUpperCase() + app.name.substring(1)} </p>
          )}{" "}
        </NavLink>
      )}{" "}
    </li>
  );
}

export default App;
