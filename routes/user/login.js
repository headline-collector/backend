import  User    from '../../models/User';
import createToken from '../../utils/createToken';
import { checkPassword } from '../../utils/crypts';

export default async function(req, res) {
  const { name, password } = req.body;
  const user = await User.findOne({ name });

  if (!user) {
    res.status(400).json({ success: false, message: 'user not found' });
  } else if (user) {

    // check if password matches
    const result = await checkPassword(password, user.password);
    if ( !result ) {
      res.status(400).json({ success: false, message: 'wrong pass' });
    } else {

      // if user is found and password is right
      // create a token
      const payload = { name: user.name };
      const token = createToken(payload);

      // return the information including token as JSON
      res.status(200).json({
        success: true,
        message: `login success ${user.name}`,
        name: user.name,
        token: token
      });
    }
  }
}
