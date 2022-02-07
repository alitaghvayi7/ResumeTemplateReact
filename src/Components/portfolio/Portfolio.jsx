import './Portfolio.scss';
import PortfolioMenuItem from '../PortfolioMenuItem';
import PortfolioItemContent from "../PortfolioItemContent";
import { useState,useEffect } from 'react';
const listItems = [
  {
    id:"featured",
    "title" : "Featured"
  },
  {
    id:"web",
    "title" : "Web App"
  },
  {
    id:"mobile",
    "title" : "Mobile App"
  },
  {
    id:"design",
    "title" : "Design"
  },
  {
    id:"content",
    "title" : "Branding"
  }
];

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/${selected}`)
    .then(response => response.json())
    .then(data => setPortfolioItems(data));
  
  }, [selected]); 

  const menuData = listItems.map(item => {
    return <PortfolioMenuItem key={item.id} id={item.id} title={item.title} active={selected===item.id} setSelected={setSelected}/>
  });

  const contentData = portfolioItems.map(portfolioItem => {
    return <PortfolioItemContent key={portfolioItem.id} src={portfolioItem.img} text={portfolioItem.title}/>
  });

  return (<div className='portfolio' id='portfolio'>
    <div className="protfolioWrapper">
      <h1>portfolio</h1>
      <ul className="portfolioMenu">
        {menuData}
      </ul>
      <div className="portfolioContent">
        {contentData}
      </div>
    </div>
  </div>);
}
