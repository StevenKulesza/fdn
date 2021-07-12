import format from 'pg-format'
import { insertEnsTable } from '../db/queries.js'
import { pool } from '../db/setup.js'
import { API } from "../api/index.js"
import { SMS } from "./sms.js"

const api = new API()
const sms = new SMS()

/*
* NOTE: prefer subscription websockets approach
* long polls subgraph api every 5000 ms (5 seconds)
*
* if there are new records, persist them, and send an SMS message
* if there are NOT records, do nothing
*/ 
export class ENS {
    formatNames(names) {
        return names.map(({id, name}) => ([
            id,
            name,
            id.split('-')[0]
        ]))
    }

    async pollNames() {
        const names = await api.getENSNames().then(names => names)        
        pool.query(format(insertEnsTable, this.formatNames(names['setENSNames'])), (error, results) => {
            if (error) throw error
            if (results.rows.length > 0) results.rows.map(item => sms.sendSMS(item))
        })

        setTimeout(() => this.pollNames(), 5000)
    }
}
