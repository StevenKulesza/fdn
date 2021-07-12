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

-------
<img width="1236" alt="Screen Shot 2021-07-12 at 7 56 14 PM" src="https://user-images.githubusercontent.com/17483238/125369886-38354680-e34b-11eb-88e0-da7b200c0628.png">

<img width="235" alt="Screen Shot 2021-07-12 at 7 10 40 PM" src="https://user-images.githubusercontent.com/17483238/125366800-da9dfb80-e344-11eb-8792-7492a2313d52.png">

----

# Questions

### What went well?

### What could have gone better?

### Is there anything specific you'd like to come back and improve if you had time? Why?
