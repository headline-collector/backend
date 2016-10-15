import express from 'express';
import bodyParser  from 'body-parser';
import methodOverride from 'method-override';
import morgan      from 'morgan';
import mongoose    from 'mongoose';
import { DATABASE } from './config'; // get our config file
import verifyToken from './middlewares/verifyToken'
import user from './routes/user';
import needingToken from './routes/needingToken';
import sitelist from './routes/sitelist'
import watch from './routes/watch'
import unwatch from './routes/unwatch'
import dailyHeadlines from './routes/dailyHeadlines'
import watchlist from './routes/watchlist'

mongoose.connect(DATABASE); // connect to database

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));

app.post('/signup', user.signup);
app.post('/login', user.login);
app.get('/sitelist', sitelist);
app.post('/watch/:site', verifyToken, watch);
app.post('/unwatch/:site', verifyToken, unwatch);
app.post('/dailyHeadlines/:date', verifyToken, dailyHeadlines);
app.post('/watchlist', verifyToken, watchlist);

app.use('/needingToken', needingToken);

const port = 3000; // used to create,sign, and verify tokens
app.listen(port);
console.log('API magic happens at http://localhost:' + port);


// handle unhandled promise rejection
// https://nodejs.org/api/process.html#process_event_unhandledrejection
process.on('unhandledRejection', function(reason, p) {
    console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
    // application specific logging, throwing an error, or other logic here
});
