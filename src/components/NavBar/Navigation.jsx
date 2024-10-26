import { useState } from "react";

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
        <a rel="stylesheet">Home</a>
        <a className="mainBtn" rel="stylesheet">Contact Me</a>
      </div>
    </nav>
  )
}