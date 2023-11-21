import Link from 'next/link';
import React from 'react';

interface NavItemProps {
  text?: string;
  url?: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, url }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link  text-light mx-2 text-capitalize" href={url ?? '/'}>
        {text}
      </Link>
    </li>
  );
}

export default NavItem;
