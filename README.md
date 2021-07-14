# Foundation ENS subgraph - sms notifications
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
* Create a developer account for Twilio to generate your account and auth keys. We are currently limited to one to/from number with the trial.

- Ensure Postgres is running
- Create database `foundation`
- Install Dependencies `yarn install` or `npm install`
- Deploy subgraph `yarn deploy`
- Run development server with `yarn serve`
    * This will create the `ens` table for you to persist ENS names from the subgraph to.
    * A scheduled service will run, long polling the subgraph and inserts new records into our table. 
    * A text message will be sent to `TWILIO_TO_NUMBER` and the message_id will be persisted to a column in the table. If it fails, the column will not be updated. We can create a retry mechanism in future iterations.
* Run a test `yarn test`

-------
<img width="1236" alt="Screen Shot 2021-07-12 at 7 56 14 PM" src="https://user-images.githubusercontent.com/17483238/125369886-38354680-e34b-11eb-88e0-da7b200c0628.png">

<img width="235" alt="Screen Shot 2021-07-12 at 7 10 40 PM" src="https://user-images.githubusercontent.com/17483238/125366800-da9dfb80-e344-11eb-8792-7492a2313d52.png">

----

# Questions
## What went well?
Overall, the system works. We created a service to store and send notifications out for existing and new ens entries from our test contract. 

I enjoyed learning about the Graph, indexing data from blocks and the next wave of decentralized apps. I got to use GraphQL for the first time. I will continue researching and utilizing this in my future projects. 

## What could have gone better?
I would of started from a template to save more time for implementation in the timeframe given.

In the real world, i would treat this project as a point of concept for a bigger effort. This would follow with investigations and implementation planning before properly building this application.

There are a number of things i would like to improve and iterate on. Please see the answers to the next question. 

## Is there anything specific you'd like to come back and improve if you had time? Why?
Yes, There are things I would love to improve on, like:

#### Architecture & Scalability
I would like to utilize a Model layer for managing the data, inserts, and validations.

I would utilize a worker queue for handling sending the sms messages, retries and various edgecases that happen when sending/persisting these entities.

I would add an http caching layer to easily avoid refetching resources and sequential scans of the db when inserting more records.

I would index on items we would search on as we grew our app like the `sms_sid` column which would be use.

I would dockerize the setup of the application to sandbox the environment for easy start up.
#### Test Coverage
Outside of the contract, each endpoint, gql query, and our ens and sms services needs appropriate testing coverage. 

We need to mock our endpoints and ensure we are being returned the appropriate values. I created one at `./api/index.test.js` to show if i shipped this feature complete i would test the rest of the app with more time allowed.

We need to unit test our services to assure they are manipulating data as we expect. 

#### Web Socket Subscriptions over Long Polling
GraphQL subscriptions were made for listening to certain events and changes this solution allowing us to subscribe to a data stream of read events and update our records without using unncessary resources on our server to poll the api. There are pros and cons for each, but Subscriptions make the most sense here. In my short time research, i found only Apollo client allowed subscribing to a gql endpoint and not Apollo Server. 

#### Error Handling & Monitoring
Each database write needs appropriate handling when an error could be expected.

We need to be able to retry our external requests.

We need to handle retries on failed SMS attempts, queueing and handling in worker queues can help us. We can keep track of our queue with Redis. 

We should appropriately log and monitor our services for uptime, failures, and general traffic.

