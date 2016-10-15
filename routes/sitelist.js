import { siteList } from '../config';

export default async function(req, res) {
  const siteObj = siteList.reduce((pre, cur) => {
    if (typeof pre[cur.tag] === 'object') {
      pre[cur.tag].push(cur.site);
    } else {
      pre[cur.tag] = [cur.site];
    }
    return pre;
  }, {})

  const siteArr = Object.keys(siteObj).map(tag => {
    return {
      tag,
      sites: siteObj[tag]
    }
  })

  res.status(200).json(siteArr);
}
