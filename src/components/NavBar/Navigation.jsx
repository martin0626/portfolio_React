import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [visibleNav, setVsisibleNav] = useState(true);
  const sectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the referenced section
    if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  const handleOpenNav = ()=>{
    setIsOpenMobile(!isOpenMobile);
  }

  return (
    <nav ref={sectionRef} className="navigation">
      <div className="logoNav">
        <img src="/My-logo.png" alt="My Logo" />
      </div>
      <div className="linksNav text-euro">
        <Link to={'/'} rel="stylesheet">Home</Link>
        <Link to={'/contact'} className="mainBtn" rel="stylesheet">Contact Me</Link>
      </div>
    </nav>
  )
}