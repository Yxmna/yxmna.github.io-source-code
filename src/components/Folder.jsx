import App from "../components/App";

function Folders(props) {
  let folder = [];
  if (props.folder) {
    folder = props.folder.apps;
  }

  while (folder.length < 4) {
    folder.push({ name: "none" });
  }

  function openFolderPlz(e) {
    if (e.currentTarget.localName == "li") {
      props.setValue(e.currentTarget.lastChild.innerHTML.toLowerCase());
      e.currentTarget.parentElement.classList.remove("closeAnimation");
      e.currentTarget.parentElement.classList.add("openAnimation");
      e.currentTarget.parentElement.parentElement.childNodes[1].classList.remove(
        "closeAnimation"
      );
      e.currentTarget.parentElement.parentElement.childNodes[1].classList.add(
        "openAnimation"
      );
    }
  }

  return (
    <li onClick={openFolderPlz}>
      <ul>
        {folder.map((app, i) => (
          <App key={"app" + i + app} app={app} folder={true} index={i} />
        ))}
      </ul>
      <p>{props.folder.name[0].toUpperCase() + props.folder.name.substring(1)}</p>
    </li>
  );
}

export default Folders;
