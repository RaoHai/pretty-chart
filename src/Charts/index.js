import G2, { Util} from '@ali/g2';
import './shape';
import Interval from './Interval';

export default {
  Interval
};

export { Interval };


G2.Global.tooltip = {
  custom: true,
  html: `<div class="ac-tooltip" style="position:absolute; visibility: hidden;">
          <p class="ac-title"></p>
          <table class="ac-list custom-table"></table>
        </div>`,
  itemTpl: `<tr>
              <td class="ac-item-text">
                <p>{name}</p>
                <p>{value}</p>
              </td>
            </tr>`,
  offset: 15,
  crossLine: {
    stroke: '#9d9d9d',
  },
  wordSpaceing: 6,
  markerCfg: {
    symbol: 'circle',
    radius: 4,
  },
};
