// export this package's api
import DeerCard from './Card';
import * as Charts from './Charts';
import Meta from './Meta';
import Title from './Title';
import Footer from './Footer';
import Percent from './Percent';

DeerCard.Charts = Charts;
DeerCard.Meta = Meta;
DeerCard.Title = Title;
DeerCard.Percent = Percent;
DeerCard.Footer = Footer;

export default DeerCard;
