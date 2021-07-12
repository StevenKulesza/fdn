import format from 'pg-format'
import { insertEnsTable } from '../db/queries.js'
import { pool } from '../db/setup.js'
import { API } from "../api/index.js"
import { SMS } from "./sms.js"

const api = new API()
const sms = new SMS()
export class ENS {
    async insertNames() {
        const names = await api.getENSNames().then(names => names)
        const formattedNames = names['setENSNames'].map(({id, name}) => ([
            id,
            name,
            id.split('-')[0]
        ]))
        
        pool.query(format(insertEnsTable, formattedNames), (error, results) => {
            if (error) throw error
            if (results.rows.length > 0) results.rows.map(item => sms.sendSMS(item))
        })
    }
}
