const espress = require('express');
const app = espress();



const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);

const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const likeRouter = require('./routes/likes');
const cartRouter = require('./routes/carts');
const orderRouter = require('./routes/orders');

app.use("/", userRouter);
app.use("/books", userRouter);
app.use("/likes", userRouter);
app.use("/carts", userRouter);
app.use("/orders", userRouter);
