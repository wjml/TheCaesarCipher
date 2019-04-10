const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

// faz o express procurar na pasta 'public' pelos assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
   res.sendfile('./index.html');
});

app.listen(port, function () {
   console.log('Our app is running on http://localhost:' + port);
});
