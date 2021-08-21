import Link from "next/link";

export const Navigation = () => {
  return (
    <>
      <nav className="flex items-center justify-center flex-wrap p-3 glass rounded-3xl">
        <ul className="flex items-center">
          <li>
            <Link href="/">
              <a className="inline-flex items-center p-2 mr-4">
                <span>Connect</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="inline-flex items-center p-2 mr-4">
                <span>Messages</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="inline-flex items-center p-2 mr-4">
                <span>Likes</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="inline-flex items-center p-2 mr-4">
                <span>Profile</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          // position: fixed;
          min-height: 5vh;
          width: 60%;
          padding: 1rem 3rem;
        }
      `}</style>
    </>
  );
};
