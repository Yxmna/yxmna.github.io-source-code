import React, { useState, useEffect } from "react";
import Explorer from "../components/Explorer";

function Stickers() {
  const [stickers, setStickers] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Yxmna/funko-stickers/main/stickers.json"
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (obj) {
        console.log(obj);
        setStickers(obj.stickers);
      });
  }, []);

  console.log(stickers);

  let blogs = [
    {
      title: "basic stickers",
      content: stickers.filter(sticker => !sticker.event && !sticker.store).map((sticker) => {
          return {
            type: "image",
            name: sticker.name,
          };
      }),
    },
    {
      title: "exclusive store stickers",
      content: stickers.filter(sticker => sticker.store).map((sticker) => {
        return {
          type: "image",
          name: sticker.store + " " + sticker.name,
        };
      })
    },
    {
      title: "exclusive event stickers",
      content: stickers.filter(sticker => sticker.event).map((sticker) => {
        return {
          type: "image",
          name: sticker.event + " " + sticker.name,
        };
      })
    },
  ];

  let stickers_with_url = stickers;
  stickers_with_url.map((sticker) => {
    if (sticker.store) {
      sticker["url"] =
        "https://raw.githubusercontent.com/Yxmna/funko-stickers/main/svg/exc_" +
        sticker.store.split(" ").join("_") +
        ".svg";
    } else if (sticker.event) {
      sticker["url"] =
        "https://raw.githubusercontent.com/Yxmna/funko-stickers/main/svg/exc_" +
        sticker.event.split(" ").join("_") +
        ".svg";
    } else {
      sticker["url"] =
        "https://raw.githubusercontent.com/Yxmna/funko-stickers/main/svg/" +
        sticker.name.split(" ").join("_") +
        ".svg";
    }
  });

  console.log(stickers_with_url);

  return (
    <>
      <Explorer blogs={blogs} blog_name="Funko stickers" />
      <div className="stickers" id="basic_stickers">
        {stickers_with_url
          .filter((sticker) => !sticker.store && !sticker.event)
          .map((sticker, i) => (
            <div key={sticker + i} id={sticker.name.split(" ").join("_")}>
              <div>
                <img src={sticker.url} />
              </div>
              <p>
                {sticker.name
                  .split(" ")
                  .map((name, i) =>
                    i == 0
                      ? name[0].toUpperCase() + name.substring(1).toLowerCase()
                      : " " +
                        name[0].toUpperCase() +
                        name.substring(1).toLowerCase()
                  )}
              </p>
            </div>
          ))}
      </div>
      <div className="stickers" id="exclusive_store_stickers">
        {stickers_with_url
          .filter((sticker) => sticker.store)
          .map((sticker, i) => (
            <div
              key={sticker + i}
              id={
                sticker.store.split(" ").join("_") +
                "_" +
                sticker.name.split(" ").join("_")
              }
            >
              <div>
                <img src={sticker.url} />
              </div>
              <p>
                {sticker.store.toUpperCase() +
                  " " +
                  sticker.name
                    .split(" ")
                    .map((name, i) =>
                      i == 0
                        ? name[0].toUpperCase() +
                          name.substring(1).toLowerCase()
                        : " " +
                          name[0].toUpperCase() +
                          name.substring(1).toLowerCase()
                    )}
              </p>
            </div>
          ))}
      </div>
      <div className="stickers" id="exclusive_event_stickers">
        {stickers_with_url
          .filter((sticker) => sticker.event)
          .map((sticker, i) => (
            <div
              key={sticker + i}
              id={
                sticker.event.split(" ").join("_") +
                "_" +
                sticker.name.split(" ").join("_")
              }
            >
              <div>
                <img src={sticker.url} />
              </div>
              <p>
                {sticker.event.toUpperCase() +
                  " " +
                  sticker.name
                    .split(" ")
                    .map((name, i) =>
                      i == 0
                        ? name[0].toUpperCase() +
                          name.substring(1).toLowerCase()
                        : " " +
                          name[0].toUpperCase() +
                          name.substring(1).toLowerCase()
                    )}
              </p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Stickers;
