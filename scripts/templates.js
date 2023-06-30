export const indexPage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DID Manager</title>
  </head>
  <body>
    <div>
      Create a new DID
      <form method="post" action="/create" name="CreateDid">
        Enter a name for your own reference<br />
        <input type="text" name="didName" /><br />
        Enter the hosting address for your DWN <br />
        <input type="text" name="nodeAddress" /><br />
        <input type="submit" value="Submit" /><br />
      </form>
      <hr />
      <a href="/seedids">See your stored DID info</a> 
    </div>
    <div>
    <hr />
    Make sure you have setup the db (npm run setup) before adding and querying your DIDs.
    The DIDs created are anchored so you need to wait up to an hour before you can use them.
    You can see when they're ready by entering your DID uri here https://identity.foundation/ion/explorer
    </div>
  </body>
</html>
`;

export const resultPage = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DID Manager</title>
  </head>
  <body>
    <div>
          <p id="didinfo">genericText</p> 
          <a href="/">Back to home page</a> 
        </p>
    </div>
  </body>
</html>`;
