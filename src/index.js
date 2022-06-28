const express = require('express');
const dotenv = require('dotenv');

// routers
const mainRouter = require('./routes/userRouter');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => global.console.log(`Server running on port ${PORT}`));

app.use(mainRouter);
