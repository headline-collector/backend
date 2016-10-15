import createToken from '../../utils/createToken';
import User from '../../models/User';
import { hashPassword } from '../../utils/crypts';

export default async function(req, res) {
  const { name, password } = req.body;

  if ( !name || !password ) {
    res.status(400).json({ success: false, message: 'info not enough', });
  }

  // see if name or email is occupied
  const user = await User.findOne({ name });
  console.log(user)
  if (!user) {
    const hashedPassword = await hashPassword(password);
    await new User({ name, password: hashedPassword, verified: false }).save();

    console.log('____User saved successfully');
    res.json({ success: true, message: 'signup success' });
  } else {
    console.log('____User not saved, name  has been taken');
    res.status(400).json({ success: false, message: 'name taken', });
  }

}
