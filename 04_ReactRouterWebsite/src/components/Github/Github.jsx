import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Chauhanvishal01")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="text-center container mx-auto my-4 bg-gray-500 text-white p-4  flex  justify-evenly items-center">
      <div class="img">
        <img src={data.avatar_url} width={300} />
      </div>
      <div class="details text-start text-xl leading-10">

        <p>Github name:  <span className="font-bold text-3xl">{data.name}</span></p>
        <p>Github Bio:{data.bio}</p>
        <p>Github Following: {data.following}</p>
        <p>Github Followers: {data.followers}</p>
        <p>Public Repos: {data.public_repos}</p>
      </div>
    </div>
  );
}

export default Github;
