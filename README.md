## REST api server starter (using JWT, express and mongoose)

### Main tools used:

[`JWT`](https://github.com/auth0/node-jsonwebtoken), [`express`](strongloop/express), [`mongoose`](https://github.com/Automattic/mongoose), [`axios`](https://github.com/mzabriskie/axios), [`nodemailer`](https://github.com/andris9/Nodemailer)

### How to start:

0. install `mongodb`
0. `npm install -g nodemon babel@5.8.29`
1. start mongodb: `mongod --dbpath YourDBPath`;
2. in `config.js`

    1. change `DATABASE` to `YourDBPath`
    2. set your `SECRET`
    3. set your `EMAIL_SENDER` used to send verification email
    4. set your `EMAIL_RECEIVING_VERIFICATION` to accept verification email(for test)

3. run the server: `npm start`

