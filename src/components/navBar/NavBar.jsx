import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";
const NavigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Projects", path: "/projects" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const NavBar = () => {

  const [open,setOpen] = useState(false);

  const links = NavigationData.map(route => <Link key={route.id} route={route}></Link>)
  return (
    <nav className="flex justify-between mx-10">

      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? <X className="md:hidden"></X> : <Menu className="md:hidden"> </Menu>}
        
      <ul className="md:hidden">
        {links}
      </ul>

      <h3 className="ml-4">My Navbar</h3>
      </span>
      <div className="md:flex hidden">
        {
          links
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

            <button>Sign in</button>
    </nav>
  );
};

export default NavBar;
