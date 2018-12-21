import { readdirSync } from 'fs-extra'
import path from 'path'

const contents = readdirSync(path.join(__dirname))

/**
 * Reads `problem` directory and imports all problems into and array that
 * is then exported.
 */
export default contents.reduce(
  (acc, cur) =>
    cur === 'index.js' || cur === 'helpers.js'
      ? acc
      : [require(path.join(__dirname, cur)), ...acc],
  []
)
