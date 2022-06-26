const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());

app.listen(PORT, () => global.console.log(`Server running on port ${PORT}`));

const mainRouter = require('./routes/mainRouter');

app.use(mainRouter);
