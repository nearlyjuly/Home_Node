import {
  DID,
  generateKeyPair,
  anchor,
} from '@decentralized-identity/ion-tools';

import { newDid } from '../scripts/dbscripts.js';

//function to create an anchored ION DID and save to the database

export async function createIon(didName, nodeAddress) {
  const nameForStorage = didName;
  //generate a keypair for the new ION DID
  const authnKeys = await generateKeyPair();

  //get the value for the DWN address
  const dwnAddress = nodeAddress;

  //create a new ION DID with a document containing the DWN address
  const newdid = new DID({
    content: {
      publicKeys: [
        {
          id: 'key1',
          type: 'JsonWebKey2020',
          publicKeyJwk: authnKeys.publicJwk,
          purposes: ['authentication'],
        },
      ],
      services: [
        {
          id: 'dwn',
          type: 'DecentralizedWebNode',
          serviceEndpoint: {
            nodes: [dwnAddress],
          },
        },
      ],
    },
  });

  //get the value of the short DID URI
  const did = await newdid.getURI('short');

  //get the operations file for the newly created DID and stringify ready for adding to db
  const operations = await newdid.getAllOperations();
  const ops = JSON.stringify(operations);

  //create an anchor request and send to be actioned
  const anchorRequest = await newdid.generateRequest();
  const response = await anchor(anchorRequest);
  const returnText =
    'Your DID is: ' +
    did +
    '<br>' +
    'If the anchor request was successful the response below will have your DID document and have the Published status as False. Check https://identity.foundation/ion/explorer/  in about an hour and it will change to True once it is anchored.' +
    '<p>' +
    response +
    '</p>';

  //add the algorithm to the generated keypair so that it can be used
  //with dwn-sdk-js repos
  authnKeys.privateJwk.alg = 'ES256K';
  
  //stringify keys and save to db
  const keysForDb = JSON.stringify(authnKeys)
  const saveDid = await newDid(nameForStorage, did, keysForDb, ops);
  return returnText;
}
