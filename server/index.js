const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI;
const dbConnection = require('./database');
dbConnection(mongoURI)
.then(() => console.info('\x1b[34m%s\x1b[0m', 'Connected to mongo server'))
.catch(err => console.error(err));

const posts = require('./routes/api/posts')

app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('\x1b[34m%s\x1b[0m', `Server started on port ${port}`));
