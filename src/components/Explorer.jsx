import { NavLink } from "react-router-dom";

function Explorer(props) {
  let blog_name = new URLSearchParams(window.location.search).get("id");

  function playCoolAnimationPls() {
    document.body.classList.remove("pageFor");
    document.body.classList.add("pageBack");
  }

  function scrollToIdPls(id) {
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop - window.innerHeight / 4,
      behavior: "smooth",
    });
  }

  if (props.blogs) {
    return (
      <nav id="explorer">
        <div>
          <NavLink to="/" onClick={playCoolAnimationPls}>
            🠜 Back
          </NavLink>
          <ul>
            {props.blogs.map((blog, i) => (
              <li key={blog.title + i}>
                <p
                  onClick={() =>
                    scrollToIdPls(
                      blog.title
                        ? blog.title.split(" ").join("_").toLowerCase()
                        : blog_name.split(" ").join("_").toLowerCase
                    )
                  }
                >
                  {blog.title
                    ? blog.title[0].toUpperCase() + blog.title.substring(1)
                    : blog_name[0].toUpperCase() + blog_name.substring(1)}
                </p>
                <ul>
                  {blog.content.map((file, i) => (
                    <li
                      key={file.name + i}
                      onClick={() =>
                        scrollToIdPls(
                          file.name.split(" ").join("_").toLowerCase()
                        )
                      }
                    >
                      <img src={"./icons/" + file.type + ".png"} />
                      {file.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav id="explorer">
        <div>
          <NavLink to="/" onClick={playCoolAnimationPls}>
            Welcome
          </NavLink>
          <ul>
            <li>
              <p>/root</p>
              <ul>
                <li>
                  <NavLink to="/">
                    <img src={"./icons/website.png"} />
                    Apps
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    <img src={"./icons/website.png"} />
                    About
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Explorer;
