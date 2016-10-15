import { siteList } from '../config';

export default async function(req, res) {
  res.status(200).json(siteList);
}
