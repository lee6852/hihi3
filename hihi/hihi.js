const { response } = require('express');
const express = require('express');
const app = express();
app.use((request, response) => {
    response.send('<h1>너 엔진?</h1>');
});

app.listen(52273, () => {
    console.log('hi');

});