const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => global.console.log(`Server running on port ${PORT}`));

const mainRouter = require('./routes/userRouter');

app.use(mainRouter);
