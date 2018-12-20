#!/usr/bin/env node

import minimist from 'minimist'
import colors from 'colors'
import getProblem from '../'

const args = minimist(process.argv.slice(2))
const problemNumber = args._[0]

try {
  const [{ problem, statement, result }] = getProblem(problemNumber)
  console.log(
    colors.gray(`[Problem ${problemNumber}] `) + colors.blue(statement)
  )
  console.log(colors.yellow(`   ${result}`))
} catch (err) {
  console.error(colors.red(`Problem ${problemNumber} was not found`))
}
