import express from 'express';
import cors from 'cors';
import { createIon } from './scripts/createiondid.js';
import { indexPage, resultPage } from './scripts/templates.js';
import { getDidIds } from './scripts/dbscripts.js';

let postRequests = 1
//create didmanager app
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//serve index.html on GET request
app.get('/', (req, res) => {
  postRequests = 1
  res.send(indexPage);
  res.end;
});

//parse POST request according to process requested
app.post('/create', async (req, res) => {
  if (postRequests !== 1) {
    res.redirect("/")
    postRequests = 1;
    return }
  const didName = req.body.didName;
  const nodeAddress = req.body.nodeAddress;
  const didRes = await createIon(didName, nodeAddress);
  const responseText = resultPage.replace('genericText', didRes)
  postRequests = 2
  res.send(responseText);
  res.end();
});

app.get('/seedids', getDidIds)

app.post('/deactivate', async (req, res) => {
  //todo
});

app.post('/sqlitebackup', async (req, res) => {
  //todo
});

app.listen(8080);
