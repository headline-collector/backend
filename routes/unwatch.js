import  User    from '../models/User';
import { siteList } from '../config';

export default async function(req, res) {
  const site = req.params.site;
  // make sure site in site list
  const existObj = siteList.find(siteObj => {
    return siteObj.site === site;
  })

  if (!existObj) {
    res.status(400).json({success:false, message:'site not yet crawlered'});
  } else {
    const user = await User.findOne({name: req.decoded.name});
    user.watches = user.watches.filter(watchedSite => {
      return watchedSite !== site
    })
    user.save();
    console.log(user)
    res.status(200).json({success: true, watches: user.watches});
    
  }
}