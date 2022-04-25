import { NavLink } from "react-router-dom";
import Asset from "../components/Asset";

function SectionBlog(props) {
  let blog = props.blog;
  let blog_name = new URLSearchParams(window.location.search).get("id");

  return (
    <section className="section_blog" id={blog.title?blog.title.split(" ").join("_").toLowerCase():blog_name.split(" ").join("_").toLowerCase()}>
      {blog.title ? (
        <header>
          <h1>{blog.title[0].toUpperCase() + blog.title.substring(1).toLowerCase()}</h1>
        </header>
      ) : (
        ""
      )}
      {blog.content.map((article, i) => (
        <Asset article={article} key={"article" + i} />
      ))}
      <Asset />
    </section>
  );
}

export default SectionBlog;
