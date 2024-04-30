// import PostStats from "@/components/shared/PostStats";
import { Input } from "@/components/ui/input";
import { useGetPopularPosts } from "@/lib/react-query/queries";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
const Explore = ({ userInfo }) => {
  // const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const requestRef = useRef(null);
  // const posts = [];  //Comment to time being
  // const shouldShowSearchResults = searchValue !== "";
  // const shouldShownPosts =
  //   !shouldShowSearchResults &&
  //   posts.pages?.every((item) => item.data.length === 0);
  const { data, isLoading } = useGetPopularPosts(name, 1000);
  const characters = data?.data?.results;
  // Update characters state with the fetched data
  useEffect(() => {
    clearTimeout(requestRef.current);
    requestRef.current = setTimeout(() => {
      setName(query);
    }, 1000);
  }, [query]);
  // setCharacters(data.results);
  console.log(data, query);
  if (isLoading || !characters) return <h1>Loading.....</h1>;
  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">Search Post</h2>
        <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
          <img
            src="/assets/icons/search.svg"
            width={24}
            height={24}
            alt="search"
          />
          <Input
            type="text"
            placeholder="Search Post"
            className="explore-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className=" w-full max-w-5xl mt-16 mb-7">
        <h3 className="body-bold md:h3-bold">Popular Posts</h3>
        <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer w-20 mt-3">
          All
          <img
            src="/assets/icons/filter.svg"
            width={20}
            height={20}
            alt="filter"
          />
        </div>
        <div className="flex flex-wrap gap-9 w-full max-w-5xl mt-3">
          <ul className="grid-container">
            {characters.map((character) => (
              <li key={character.id} className="relative min-w-80 h-80">
                <Link to={`/post/${character.id}`} className="grid-post_link">
                  <img
                    src={character.image}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                  {character.name}
                </Link>
                <div className="grid-post_user">
                  <div className="flex items-center justify-start gap-2 flex-1">
                    <img
                      src={`http://localhost:3000/images/${userInfo?.imageId}`}
                      alt="profile picture"
                      className="rounded-full size-8"
                    />
                    <p className="">{userInfo?.name}fefere</p>
                  </div>
                  {/* <PostStats post={post.likes} /> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Explore;
