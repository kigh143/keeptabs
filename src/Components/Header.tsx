import React from "react";

interface Props {
  color: string;
}

const Header: React.FC<Props> = ({ color }) => {
  return (
    <header style={{ backgroundColor: color }}>
      <a href="/home">KeepTabs</a>
      <nav>
        <ul>
          <li>
            <a href="/">Lock</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
