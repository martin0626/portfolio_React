import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [visibleNav, setVsisibleNav] = useState(true);


  const handleOpenNav = ()=>{
    setIsOpenMobile(!isOpenMobile);
  }

  return (
    <nav className="navigation">
      <div className="logoNav">
        <p>Logo</p>
      </div>
      <div className="linksNav text-euro">
        <Link to={'/'} rel="stylesheet">Home</Link>
        <Link to={'/contact'} className="mainBtn" rel="stylesheet">Contact Me</Link>
      </div>
    </nav>
  )
}