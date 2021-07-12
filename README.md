# Foundation subgraph ENS sms notifications
`https://thegraph.com/legacy-explorer/subgraph/stevenkulesza/fdn`

## setup
- create `.env` file from `.env.example`:
```
DB_USER=user
DB_HOST=localhost
DB_PASS=password
DB_DATABASE=foundation
DB_PORT=5432
PORT=4000
SUBGRAPH_URL=https://api.thegraph.com/subgraphs/name/stevenkulesza/fdn
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_FROM_NUMBER=
TWILIO_TO_NUMBER=
```
- Twilio:
https://www.twilio.com/
* Create a developer account for Twilio to generate your account and auth keys.

- Ensure Postgres is running
- Create database `foundation`
- Install Dependencies `yarn install` or `npm install`
- Deploy subgraph changes with `yarn deploy`
- Run development server with `yarn serve`
    * This will create the `ens` table for you to persist ENS names from the subgraph to.
    * A scheduled service will run to poll the subgraph and inserts new records into. 
    * A text message will be sent to `TWILIO_TO_NUMBER`

----

# Questions

### What went well?

### What could have gone better?

### Is there anything specific you'd like to come back and improve if you had time? Why?
