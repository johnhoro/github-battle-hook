import React from "react";

function Card(props) {
  console.log(props);
  return (
    <>
      <div className="container flex wrap">
        {props.data &&
          props.data.map((a, i) => (
            <div key={i} className="card flex-30">
              <div className="num">
                <span className="number">{`#${i + 1}`}</span>
              </div>
              <div className="img">
                <img
                  className="img-width"
                  src={`${a.owner.avatar_url}`}
                  alt={`${a.id}`}
                />
              </div>
              <h3 className="text">{a.name}</h3>
              <ul>
                <li>
                  <span className="profile">
                    <i className="fas fa-user"></i>
                  </span>
                  <span className="p-text">{a.name}</span>
                </li>
                <li>
                  <span className="star">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="s-text">{a.stargazers_count} stars</span>
                </li>
                <li>
                  <span className="share">
                    <i className="fas fa-share-alt"></i>
                  </span>
                  <span className="s-text">{a.forks_count} forks</span>
                </li>
                <li>
                  <span className="triangle">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                  <span className="s-text">
                    {a.open_issues_count} open issues
                  </span>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </>
  );
}

export default Card;
