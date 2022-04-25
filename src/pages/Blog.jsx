import React, { useState, useEffect } from "react";
import SectionBlog from "../components/SectionBlog";
import Explorer from "../components/Explorer";

function Blog() {
  const blog_name = new URLSearchParams(window.location.search).get("id");

  document.querySelector("body").classList.remove("pageBack");
  document.querySelector("body").classList.add("pageFor");

  const [blog, setblog] = useState("");

  useEffect(() => {
    fetch("./pages/" + blog_name + "/blog.txt", {})
      .then(function (res) {
        return res.text();
      })
      .then(function (obj) {
        setblog(obj);
      });
  }, []);

  let params_obj = {};
  let blogs = [];

  function makeTheBlogObjectPls() {
    let blog_content_array = blog.split("---");
    let blog_params = blog_content_array[0].split("\n");
    params_obj = {};
    blog_params.forEach((item, i) => {
      if (item) params_obj[item.split("=")[0]] = item.split("=")[1];
    });
    blog_content_array.shift();
    blogs = [];
    blog_content_array.forEach((b, i) => {
      let blog_obj = {
        title: "",
        description: "",
        content: [],
      };
      let correct_b = b.split("\r").join("");
      let blog_content = correct_b.split("\n\n");
      blog_content.shift();
      let blog_params = blog_content[0].split("\n");
      blog_params.forEach((item, i) => {
        blog_obj[item.split("=")[0]] = item.split("=")[1];
      });
      blog_content.shift();
      blog_content.forEach((item, i) => {
        if (item) {
          let obj = {};
          item.split("\n").forEach((p, i) => {
            if (p) {
              let it = p.split("=");
              obj[it[0]] = it[1];
            }
          });
          blog_obj.content.push(obj);
        }
      });

      blogs.push(blog_obj);
    });
  }

  makeTheBlogObjectPls();

  return (
    <>
      <Explorer blogs={blogs} />
      <div id="blog">
        <header>
          <h1>{params_obj.title}</h1>
          <h2>{params_obj.description}</h2>
        </header>

        {blogs.map((blog, i) => (
          <SectionBlog blog={blog} key={"section" + i} />
        ))}
      </div>
    </>
  );
}

export default Blog;
