// export this package's api
import './common/common.less';
import DeerCard from './Card';
import * as Charts from './Charts';
import Meta from './Meta';
import Row from './Row';
import Title from './Title';
import Footer from './Footer';
import Percent from './Percent';
import PlaceHolder from './PlaceHolder';

DeerCard.Charts = Charts;
DeerCard.Meta = Meta;
DeerCard.Title = Title;
DeerCard.Percent = Percent;
DeerCard.Footer = Footer;
DeerCard.Row = Row;
DeerCard.PlaceHolder = PlaceHolder;

export default DeerCard;
export { Charts, Meta, Title, Percent, Footer, Row, PlaceHolder };