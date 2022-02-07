import './Navbar.scss';
import {MdMail,MdSmartphone} from "react-icons/md";
export default function Navbar({showMenu,setShowMenu}) {


  return (
    <nav className={`navbar ${showMenu && 'active'}`}>
      <div className="navbarWrapper">
        <div className="leftNavbar">
          <a href="#intro" className='navbarLogo'>
            genius.
          </a>
          <div className="navbarItems">
            <div className='email'><MdMail className='navbarItemsIcon'/><a href='mailto:alitaghvaei78@gmail.com'>alitaghvaei78@gmail.com</a></div>
            <div className='number'><MdSmartphone className='navbarItemsIcon'/><span>+989121231212</span></div>
            </div>
        </div>
        <div className="rightNavbar">
          <button className='humbergerMenu' onClick={setShowMenu}>
            <span className='humbergerMenuIcon'></span>
            <span className='humbergerMenuIcon'></span>
            <span className='humbergerMenuIcon'></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
