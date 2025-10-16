import React from "react";
import Link from "./Link";
const NavigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Projects", path: "/projects" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const NavBar = () => {
  return (
    <nav>

      <div className="flex">
        {
        NavigationData.map(route => <Link key={route.id} route={route}></Link>)
        }
      </div>
      {/* <ul className="flex">
        {NavigationData.map((route) => (
          <li className="mr-10">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}
      {/* <ul className='flex '>
                <li className='mr-10'><a href="">Home</a></li>
                <li className='mr-10'><a href="">Abput</a></li>
                <li className='mr-10'><a href="">Blog</a></li>
            </ul> */}
    </nav>
  );
};

export default NavBar;
