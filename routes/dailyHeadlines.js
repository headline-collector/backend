import DailyHeadline from '../models/DailyHeadline'
import User from '../models/User'

export default async function(req, res) {
  const date = req.params.date;
  const user = await User.findOne({name: req.decoded.name});
  const headlineArr = [];

  // console.log(user)
  for (let i = 0; i < user.watches.length; i++) {
    const site = user.watches[i]
    console.log(site)
    const siteHeadlines = await DailyHeadline.find({site, date})
    headlineArr.push(siteHeadlines[0])
  }

  res.status(200).json({
    message: 'success',
    headlines: headlineArr
  });
}
