import axios from 'axios';
import assert from 'assert';

import { BASEURL, EMAIL_RECEIVING_VERIFICATION }
  from '../config';

let token = '';

// handle promise error
// https://nodejs.org/api/process.html#process_event_unhandledrejection
// process.on('unhandledRejection', function(reason, p) {
//     console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
//     // application specific logging, throwing an error, or other logic here
// });

describe('GET /needingToken', function () {

  before(async function() {
    const signupRes = await axios.post(`${BASEURL}/signup`, {
      email: `${EMAIL_RECEIVING_VERIFICATION}`,
      name: `tim`,
      password: '123',
    }).catch((res) => {
      console.log('before message:', res.data);
    });
    // console.log(signupRes);

    const loginRes = await axios.post(`${BASEURL}/login`, {
      name: 'tim',
      password: '123',
    }).catch((res) => { throw res.data;});

    token = loginRes.data.token;
    // console.log(token);

  });

  it('should need token', function () {
    return axios.get(`${BASEURL}/needingToken`)
      .then((res) => { throw res; })
      .catch((res) => {
        assert.equal(res.data.success, false, 'should be false');
      });
  });

  it('should success', function () {
    return axios.get(`${BASEURL}/needingToken`, {params: {token}})
      .then((res) => {
        // console.log(res.data);
        assert.equal(typeof res.data.name, 'string', 'name should be String');
      });
  });

});
