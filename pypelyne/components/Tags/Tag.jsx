export const Tag = ({ tagText, tagColour, textColour }) => {
  return (
    <>
      <span
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-2xl font-medium m-2 ${tagColour} ${textColour}`}
      >
        {tagText}
      </span>
    </>
  );
};
