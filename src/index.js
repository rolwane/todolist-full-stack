require('express-async-errors');

const express = require('express');
const dotenv = require('dotenv');

// error middleware
const errorMiddleware = require('./middlewares/errorMiddleware');

// routers
const userRouter = require('./routes/userRouter');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(userRouter);
app.use(errorMiddleware);
