//not completed yet

// import { Dwn } from '@tbd54566975/dwn-sdk-js';
// import express from 'express';
// import cors from 'cors';

// const app = express();
// const dwn = await Dwn.create();

// //main app for messages created using Web5-JS library
// app.use(cors());
// app.use(express.json());

// //send an error if incoming request is not POST
// app.use((req, res, next) => {
//   if (req.method !== 'POST') {
//     res.sendStatus(403);
//   } else {
//     next();
//   }
// });

// //parse POST request and send to dwn for processing
// app.post('/', externalMessage);

// async function externalMessage(req, res) {
//   const body = JSON.parse(req.body);
//   const did = body.params.target;
//   const message = body.params.message;
//   const encodedData = body.params.encodedData;
//   const dwnReply = await dwn.processMessage(did, message, encodedData);
//   res.send(JSON.stringify(dwnReply));
//   res.end();
// }

// app.listen(3000);
