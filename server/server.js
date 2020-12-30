// requires
const express = require('express')
const app = express()
const { generateDoc } = require('../renta/renta');
const bodyParser = require('body-parser');
const { verifyParams } = require('../middlewares/middleware')
const cors = require('cors')

// config
const port = process.env.PORT || 4000;
app.options('*', cors())
app.use(cors())
app.use(bodyParser.json());

// middleware
app.use((req, res, next) => {
    let verify = verifyParams(req.body);
    if (!verify.Verification) {
        res.status(400).json({
            Status: 400,
            Errors: verify.Errors
        });
    } else {
        next();
    }
})

app.post('/rent', (req, res) => {
    generateDoc(req.body)
        .then(archivo => {
            res.status(200).json({
                Status: 200,
                Message: `${archivo} generated.`
            })
        })
        .catch(err => {
            res.status(400).json({
                Status: 400,
                Message: `An error occurred while getting the information.`,
                Error: err
            })
        });
})

app.listen(port, () => {
    console.log(`Listening port ${port}`);
});