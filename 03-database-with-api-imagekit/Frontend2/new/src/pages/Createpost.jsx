import React from "react";

const Createpost = () => {
  return (
    <section className="create-post-section">
      <h1>Create Post</h1>
      <form action="">
        <input type="file" name="image" accept="image/*" />
        <input type="text" name="Caption" required  placeholder="Enter caption"/>
        <button type="button">Submit</button>

      </form>
    </section>
  );
};

export default Createpost;
