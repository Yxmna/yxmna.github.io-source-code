import React, { useState, useEffect } from "react";
import Folder from "../components/Folder";
import App from "../components/App";
import { NavLink } from "react-router-dom";
import Explorer from "../components/Explorer";

function Home() {
  const [value, setValue] = useState("");
  const [folders, setFolders] = useState([""]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Yxmna/Yxmna.github.io/master/public/pages/folders.json",
      {}
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (obj) {
        setFolders(obj.folders);
      });
  }, []);

  console.log(folders);

  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [folders]);

  function closeFolderPlz(e) {
    if (e.currentTarget.localName == "div" && value) {
      e.currentTarget.parentElement.lastChild.classList.remove("openAnimation");
      e.currentTarget.parentElement.lastChild.classList.add("closeAnimation");
      e.currentTarget.parentElement.childNodes[1].classList.remove(
        "openAnimation"
      );
      e.currentTarget.parentElement.childNodes[1].classList.add(
        "closeAnimation"
      );
      setValue("");
    }
  }

  function playCoolAnimationPls() {
    document.body.classList.remove("pageBack");
    document.body.classList.add("pageFor");
  }

  function playCoolAnimationPls() {
    document.body.classList.remove("pageBack");
    document.body.classList.add("pageFor");
  }

  function getTheCorrectFolderPls(value) {
    let return_value = {};
    folders.forEach((folder, i) => {
      if (folder.name == value) {
        return_value = folder;
      }
    });
    return return_value.apps;
  }

  if (folders.length < 2) return;

  if (!value) {
    return (
      <>
        <Explorer />
        <div className="phone">
          <div onClick={closeFolderPlz}></div>
          <ul>
            <p>{"value"}</p>
            {folders.map((folder, i) => (
              <Folder key={"folder" + i} folder={folder} setValue={setValue} />
            ))}
            <li className="phantom">
              <p></p>
            </li>
            <li className="phantom">
              <p></p>
            </li>
            <li className="phantom">
              <p></p>
            </li>
            <li className="phantom">
              <p></p>
            </li>
          </ul>
        </div>
      </>
    );
  } else {
    let folder = getTheCorrectFolderPls(value);
    return (
      <>
        <Explorer />
        <div className="phone">
          <div onClick={closeFolderPlz}></div>
          <ul>
            <p>{value[0].toUpperCase() + value.substring(1)}</p>
            {folder.map((app, i) => (
              <App key={"app" + i} app={app} />
            ))}
            <li className="phantom">
              <p></p>
            </li>
            <li className="phantom">
              <p></p>
            </li>
            <li className="phantom">
              <p></p>
            </li>
            <li className="phantom">
              <p></p>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Home;
