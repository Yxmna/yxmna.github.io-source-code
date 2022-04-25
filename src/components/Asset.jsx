import { NavLink } from "react-router-dom";

function Asset(props) {

  let blog_name = new URLSearchParams(window.location.search).get("id");
  let article = props.article;
  if (!article) return;

  return (
    <article className="asset" id={article.name.split(" ").join("_").toLowerCase()}>
      <div>
        {article.icon ? <img src={article.icon} /> : article.type=="website"||article.type=="software"? <img src={article.homepage.split("/")[0] + "//" + article.homepage.split("/")[2] + "/favicon.ico"} />:""}
        <h1>{article.name}</h1>
      </div>
      <h2>{article.description}</h2>
      {article.img ? (
        <img src={"./pages/" + blog_name + "/" + article.img} />
      ) : (
        ""
      )}

      <div>
        {article.download ? (
          <a
            download={article.download}
            href={"./pages/" + blog_name + "/" + article.download}
          >
            Download
          </a>
        ) : (
          ""
        )}
        {article.type == "image" ? (
          <a
            href={"./pages/" + blog_name + "/" + article.download}
            target="_blank"
          >
            {article.type == "image" ? "Open image" : ""}
          </a>
        ) : (
          ""
        )}
        {article.homepage ? (
          <a
            href={article.homepage}
            target="_blank"
          >
            View page
          </a>
        ) : (
          ""
        )}
        {article.video ? (
          <a
            href={article.video}
            target="_blank"
          >
            View video
          </a>
        ) : (
          ""
        )}
      </div>
    </article>
  );
}

export default Asset;
