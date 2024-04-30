import React, { useState, useEffect } from "react";

const UpdateProfile = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UpdateProfile------------------------");
  }, []);

  return (
    <div>
      UpdateProfile
      <h1>UpdateProfile</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default UpdateProfile;
