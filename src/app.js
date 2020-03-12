import express from 'express';

const port = process.env.PORT || 3000;
const app = new express();

app.listen(port, () => {
    console.log('App started on port', port);
});
