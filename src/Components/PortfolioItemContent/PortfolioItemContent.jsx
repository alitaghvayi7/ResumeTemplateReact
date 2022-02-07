import './PortfolioItemContent.scss';

export default function PortfolioItemContent({src,text}) {
  return (
    <div className="portfolioContentItem">
          <img src={src} alt={text} />
          <p>{text}</p>
    </div>
  );
}
