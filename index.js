import express from 'express';
import fs from 'fs';

const app = express();

const router = express.Router();

const getNumber = () => {
    return +fs.readFileSync('./data/data.txt', (err, val) => {
        return val;
     });
};
const increment = () => {
    const data = +fs.readFileSync('./data/data.txt', (err, val) => {
        return val;
    });
    const newData = data + 1;
    fs.writeFileSync('./data/data.txt', newData.toString());
    return newData;
};

router.get('/', function (req, res) {
    res.send(`Counter: ${getNumber()}`);
});
router.get('/stat', function (req, res) {
    res.send(`Increment: ${increment()}`);
});
router.get('/about', function (req, res) {
    res.send(`<h3>Hello, Warpion</h3><b>Hostname: ${req.hostname}</b><br>Counter: ${getNumber()}`);
});


app.use(router);
app.listen(3000);