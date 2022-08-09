const express = require('express'); // express 패키지 사용
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const port = 3306;
app.listen(port, () => {
    console.log("Server listening on port", port)
})

app.use('/users', require('./routes/userRouter'));
app.use('/search', require('./routes/searchRouter'));
app.use('/sort', require('./routes/sortRouter'));
app.use('/test', require('./routes/testRouter'));