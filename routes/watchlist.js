import User from '../models/User';

export default async function(req, res) {
  const user = await User.findOne({name: req.decoded.name});
  console.log(user)
  res.status(200).json({
    success: true,
    watches: user.watches,
    name: user.name
  })

}