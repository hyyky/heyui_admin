import utils from 'hey-utils';
import func from './func';
const rclass = /[\t\r\n\f]/g;
const rnotwhite = (/\S+/g);

export default utils.extend({}, utils, func, {
  getClass(elem) {
    return (elem.getAttribute && elem.getAttribute('class')) || '';
  },
  hasClass(elem, selector) {
    let className;
    className = ` ${selector} `;
    if (elem.nodeType === 1 && (` ${this.getClass(elem)} `)
      .replace(rclass, ' ')
      .indexOf(className) > -1) {
      return true;
    }

    return false;
  }
});
