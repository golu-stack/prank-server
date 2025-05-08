const express = require('express'), fs = require('fs'), app = express();
app.use(express.json());
app.post('/save-image', (req, res) => {
  fs.writeFileSync(`selfie-${Date.now()}.jpg`, req.body.image.replace(/^data:image\/jpeg;base64,/, ''), 'base64');
  res.send('OK');
});
app.listen(process.env.PORT || 3000);