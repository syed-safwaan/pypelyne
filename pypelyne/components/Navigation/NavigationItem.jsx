import Link from "next/link";
export const NavigationItem = ({ title, icon, link }) => {
  return (
    <li>
      <div className="flex items-center justify-center flex-col p-1">
        <div className="m-1 h-1">{icon}</div>

        <Link href={link}>
          <a className="inline-flex items-center p-2 mr-1 ml-1 mt-3">
            <span className="">
              <b>{title}</b>
            </span>
          </a>
        </Link>
      </div>
    </li>
  );
};
