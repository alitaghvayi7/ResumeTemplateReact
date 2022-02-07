import './PortfolioMenuItem.scss';

export default function PortfolioMenuItem({id,title,setSelected,active}) {
  return <li className={`portfolioItem ${active && 'active'}`} onClick={(e) => setSelected(id)}>{title}</li>;
}
