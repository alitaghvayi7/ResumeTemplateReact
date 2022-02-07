import './Menu.scss';

export default function Menu({showMenu,setShowMenu}) {
  return (
      <menu className={`menu ${showMenu && 'active'}`}>
        <ul className='menuWrapper'>
            <li className='menuItem' onClick={()=>setShowMenu(false)}><a href="#intro" className='menuLink'>Home</a></li>
            <li className='menuItem' onClick={()=>setShowMenu(false)}><a href="#portfolio" className='menuLink'>Portfolio</a></li>
            <li className='menuItem' onClick={()=>setShowMenu(false)}><a href="#works" className='menuLink'>Works</a></li>
            <li className='menuItem' onClick={()=>setShowMenu(false)}><a href="#testimonials" className='menuLink'>Testimonials</a></li>
            <li className='menuItem' onClick={()=>setShowMenu(false)}><a href="#contact" className='menuLink'>Contact</a></li>
        </ul>
      </menu>
  );
}
