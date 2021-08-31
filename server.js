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