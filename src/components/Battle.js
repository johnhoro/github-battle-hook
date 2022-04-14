import React, { useEffect, useState } from "react";

function Battle() {
  let [userOne, setUserOne] = useState(null);
  let [userTwo, setUserTwo] = useState(null);
  let [inputOne, setInputOne] = useState("");
  let [inputTwo, setInputTwo] = useState("");
  let [battle, setBattle] = useState(true);
  let [scoreOne, setScoreOne] = useState(null);
  let [scoreTwo, setScoreTwo] = useState(null);

  const handleSubmit = (event, label) => {
    if (label === "submitOne") {
      fetch(`https://api.github.com/users/${inputOne}`)
        .then((res) => res.json())
        .then((data) => {
          setUserOne(data);
          console.log(data);
        });
    } else {
      fetch(`https://api.github.com/users/${inputTwo}`)
        .then((res) => res.json())
        .then((data) => {
          setUserTwo(data);
          console.log(data);
        });
    }
  };
  const handleCross = () => {
    setUserOne(null);
  };
  const handleCrossTwo = () => {
    setUserTwo(null);
  };
  const handleBattle = () => {
    setBattle(false);
    setScoreOne(userOne.followers * 20 + userOne.public_repos);
    setScoreTwo(userTwo.followers * 20 + userTwo.public_repos);
  };
  console.log(userOne, userTwo);

  return (
    <>
      {battle ? (
        <div>
          <h1 className="heading">Players</h1>
          <span className="flex justify container player-battle">
            <span className="">
              <div className="text-battle">Enter Two User Name</div>
              <div className="font-tag">
                <i className="fas fa-users"></i>
              </div>
            </span>
            <span>
              <div className="text-battle">Battle</div>
              <div className="font-tag">
                <i className="fas fa-fighter-jet"></i>
              </div>
            </span>
            <span>
              <div className="text-battle">See winner</div>
              <div className="font-tag">
                <i className="fas fa-trophy"></i>
              </div>
            </span>
          </span>
          <div className="container flex">
            <div>
              <label>Player One</label>
              {userOne ? (
                <div className="input-card">
                  <img
                    className="input-img"
                    src={userOne.avatar_url}
                    alt={"j"}
                  />
                  <span className="input-name">{userOne.login}</span>
                  <span onClick={handleCross} className="cross">
                    <i className="fas fa-times-circle"></i>
                  </span>
                </div>
              ) : (
                <div className="flex-40 flex">
                  <input
                    type="text"
                    onChange={(event) => setInputOne(event.target.value)}
                    name="inputOne"
                    value={inputOne}
                    placeholder="Githubusername"
                  />
                  <button onClick={(event) => handleSubmit(event, "submitOne")}>
                    Submit
                  </button>
                </div>
              )}
            </div>
            <div>
              <label>Player Two</label>
              {userTwo ? (
                <div className="input-card">
                  <img className="input-img" src={userTwo.avatar_url} alt="i" />
                  <span className="input-name">{userTwo.login}</span>
                  <span onClick={handleCrossTwo} className="cross">
                    <i className="fas fa-times-circle"></i>
                  </span>
                </div>
              ) : (
                <div className="flex-40 flex">
                  <input
                    onChange={(event) => setInputTwo(event.target.value)}
                    type="text"
                    name="inputTwo"
                    value={inputTwo}
                    placeholder="Githubusername"
                  />
                  <button onClick={(event) => handleSubmit(event, "submitTwo")}>
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
          {userOne && userTwo ? (
            <div className="btn-battle">
              <span onClick={handleBattle} className="btn-b">
                Battle
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="container flex">
          <div className="card card-battle">
            <ul className="battle-li">
              <li className="winner">
                {scoreTwo < scoreOne
                  ? "Winner"
                  : scoreTwo > scoreOne
                  ? "Loser"
                  : scoreTwo === scoreOne
                  ? "Tie"
                  : ""}
              </li>
              <div className="flex center">
                <img className="img-width" src={userOne.avatar_url} alt="img" />
              </div>
              <li>Score: {scoreOne}</li>
              <li>{userOne.login}</li>
              <li>
                <span>
                  <i className="fas fa-user"></i>
                </span>
                <span>{userOne.followers} Followers</span>
              </li>
              <li>
                <span>
                  <i className="fas fa-user"></i>
                </span>
                <span>{userOne.following} Following</span>
              </li>
              <li>{userOne.public_repos} repositories</li>
            </ul>
          </div>
          <div className="card card-battle">
            <ul className="battle-li">
              <li className="winner">
                {scoreTwo > scoreOne
                  ? "Winner"
                  : scoreTwo < scoreOne
                  ? "Loser"
                  : scoreTwo === scoreOne
                  ? "Tie"
                  : ""}
              </li>
              <div className="flex center">
                <img className="img-width" src={userTwo.avatar_url} alt="" />
              </div>
              <li>Score: {scoreTwo}</li>
              <li>{userTwo.login}</li>
              <li>
                <span>
                  <i className="fas fa-user"></i>
                </span>
                <span>{userTwo.followers} Followers</span>
              </li>
              <li>
                <span>
                  <i className="fas fa-user"></i>
                </span>
                <span>{userTwo.following} Following</span>
              </li>
              <li>{userTwo.public_repos} repositories</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Battle;
