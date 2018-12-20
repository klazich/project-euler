import { readdirSync } from 'fs-extra'
import path from 'path'

const contents = readdirSync(path.join(__dirname))

export default contents.reduce(
  (acc, cur) =>
    cur === 'index.js' ? acc : [require(path.join(__dirname, cur)), ...acc],
  []
)
