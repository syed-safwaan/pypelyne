import React from "react";
export const SimpleTextArea = () => {
  const [text, setText] = React.useState("");
  const onBioChange = (bio) => setBio(bio);
  return (
    <>
      <textarea
        className="glass w-3/4 h-1/5 m-3 rounded-2xl p-3"
        id="biography"
        cols="15"
        rows="5"
        value={text}
        onChange={onBioChange}
      />
    </>
  );
};
