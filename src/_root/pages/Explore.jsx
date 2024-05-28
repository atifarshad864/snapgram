// import PostStats from "@/components/shared/PostStats";
import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetPopularPosts } from "@/lib/react-query/queries";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
const Explore = ({ userInfo }) => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  // const [searching, setIsSearching] = useState(false);
  const requestRef = useRef(null);
  const { data, isLoading, isFetching } = useGetPopularPosts(name, page);
  const newCharacters = data?.data?.results;
  // Update characters state with the fetched data
  useEffect(() => {
    clearTimeout(requestRef.current);
    requestRef.current = setTimeout(() => {
      setName(query);
    }, 1000);
  }, [query]);
  // setCharacters(data.results);
  console.log(data, query);

  useEffect(() => {
    if (newCharacters) {
      if (data?.data?.info?.prev) {
        setAllCharacters([...allCharacters, ...newCharacters]);
      } else {
        setAllCharacters(newCharacters);
      }
    }
  }, [newCharacters]);
  console.log("All Characters-------", allCharacters);
  console.log("query-------------", query);
  console.log("name-----", name);
  const handleLoadMore = (isFetching) => {
    console.log(isFetching);
    setPage((prevPage) => prevPage + 1);
  };

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
          {/* {isLoading || !characters ? <Loader /> : null} */}
          <ul className="grid-container">
            {allCharacters?.map((character) => (
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
          {!isLoading && !isFetching && data?.data?.info.next && (
            <Button
              onClick={handleLoadMore}
              className="shad-button_primary w-20 m-auto mt-4 sm:mt-4"
            >
              Load More
            </Button>
          )}
          {console.log(isFetching)}
          {isFetching && <Loader />}
        </div>
      </div>
    </div>
  );
};
export default Explore;
