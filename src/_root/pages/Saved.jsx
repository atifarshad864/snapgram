import React from "react";

const Saved = () => {
  const savedPost = JSON.parse(localStorage.getItem("savedPost"));

  return (
    <div className="post-card">
      <h2>Saved Post</h2>
      {savedPost && (
        <div>
          <div className="post-card">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 justify-between">
                <div className="flex flex-col gap-2"></div>
                <ul className="flex flex-col flex-1 gap-9 w-full">
                  <p>{savedPost.caption}</p>
                  <p>{savedPost.tags}</p>
                  <p>{savedPost.location}</p>
                  <img
                    src={
                      `http://localhost:3000/images/${savedPost.imageId}` ||
                      "/assets/icons/profile-placeholder.svg"
                    }
                    alt="post image"
                    className="post-card_img"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Saved;
