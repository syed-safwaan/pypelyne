import Link from "next/link";
export const ProfilePicture = ({ image, className }) => {
  console.log(image, className);
  return (
    <div className={className}>
      <img className="rounded-2xl" src={image} alt="" />
    </div>
    // <section id="main" className="glass rounded-3xl m-2">
    //   {/* <div className="glass rounded-2xl w-52 h-52 m-auto mt-4"></div> */}
    //   <div className={className}></div>
    //   {/* <div
    //     className="glass rounded-2xl w-4/5 h-28 m-auto mt-4"
    //     style={{ transform: "translateY(-8rem)" }}
    //   ></div> */}
    // </section>
  );
};
