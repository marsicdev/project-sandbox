/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

import fs from 'fs'
import { generateJsonData } from './faker'

const fakeJSONApiData = generateJsonData()

fs.writeFile("db/db.json", fakeJSONApiData, function (err) {
    if (err) {
        return console.log(err)
    } else {
        console.log("Mock data generated.")
    }
})
