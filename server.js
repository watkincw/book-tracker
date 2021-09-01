
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));

const express = require('express');
const db = require('./config/connection.js');
const apiRoutes = require('./controllers/apiRoutes');
const htmlRoutes = require('./controllers/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Root api/html Routes - (unsure if html will be needed) - comented for now, no files for routes yet
// app.use('/api', apiRoutes);
// app.use('/api', htmlRoutes);


// Default response for any invalid request (Not Found)
app.use((req, res)=>{
    res.status(400).end();
});

// Start server after DB connection
db.query(err=>{
    if (err) throw err;
    console.log(`Database connected.`);
    app.listen(PORT, ()=>{
        console.log(`Server funning on PORT ${PORT}`);
    });
});