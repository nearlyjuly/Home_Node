import { Dwn } from "@tbd54566975/dwn-sdk-js";
import express from "express";
import cors from 'cors';

//add your tenant DID(s) to the tenantsArray below
const homeTenantGate = {
    async isTenant(did) {
        const tenantsArray = ["did:ion:putyourtenantdidhere","did:web:putanothertenantdidhere"];
        return tenantsArray.includes(did);
    }
}

const app = express();
const dwn = await Dwn.create({ tenantGate: homeTenantGate});

app.use(cors());
app.use(express.text());
app.use(express.raw({type: "*/*"}))


app.use((req, res, next) => {
    if (req.method !== 'POST') {
        res.sendStatus(403);
    } else {
        next();
    }
});

app.post('/', externalMessage);

async function externalMessage(req, res) {
const reqMessage = JSON.parse(req.headers['dwn-request']);
const did = reqMessage.params.target;
const message = reqMessage.params.message;
const id = reqMessage.id;
const data = req.body;
const dwnReply = await dwn.processMessage(did, message, data);
//console.log(dwnReply);
res.set('application/octet-stream');
res.send({
    jsonrpc: '2.0',
    id: id,
    result: {
        reply: dwnReply
    }
})
res.end();
}

app.listen(3000, () =>
console.log("DWN listening on port 3000"));

