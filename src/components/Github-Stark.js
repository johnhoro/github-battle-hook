import React, { useEffect, useState } from "react";
import Card from "./Card";

function Github() {
  let [data, setData] = useState(null);
  let [tag, setTag] = useState(`All`);
  console.log(tag);

  useEffect(() => {
    fetchData(tag);
    return () => {};
  }, [tag]);

  function fetchData(tag) {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${tag}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setData(data.items);
      });
  }

  let allTag = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  return (
    <>
      <ul className="tags">
        {allTag.map((t, i) => (
          <span
            key={i}
            className={t === tag ? "active-nav " : ""}
            onClick={(event) => {
              setTag(event.target.innerText);
              console.log(event.target.innerText);
            }}
          >
            {t}
          </span>
        ))}
      </ul>
      <Card data={data} />
    </>
  );
}

export default Github;
