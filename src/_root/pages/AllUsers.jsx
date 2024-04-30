// import axios from "axios";
import React from "react";
// import { useEffect, useState } from "react";

const AllUsers = () => {
  // const [characters, setCharacters] = useState([]);
  // const [query, setQuery] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get(``);
  //       setCharacters(data.results);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   setTimeout(() => {
  //     fetchData();
  //   }, 2000);
  // }, [query]);
  return (
    <div className="results">
      {/* {/* <input
        type="text"
        placeholder={"Search Character"}
        className=" text-black"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          {character.name}
        </div>
      ))} */}
    </div>
  );
};
export default AllUsers;
