#!/usr/bin/env node

import minimist from 'minimist'
import colors from 'colors'
import fs from 'fs-extra'
import { join, relative } from 'path'

import getProblem from '../'

const args = minimist(process.argv.slice(2))

if (args._[0]) {
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
}

if (args.new) {
  const newProblemNumber = args.new
  const problemsDirectory = join(__dirname, '..', 'problems')
  const newProblemDirectory = join(problemsDirectory, `${newProblemNumber}`)

  const indexContents = `export const problem = ${newProblemNumber}
  export const statement = ''
  function answer() {

  }
  export const result = null`

  const readmeContents = `#\n
  ## Problem ${newProblemNumber}`

  try {
    if (!fs.existsSync(newProblemDirectory)) {
      fs.mkdirSync(newProblemDirectory)
      fs.writeFileSync(join(newProblemDirectory, 'index.js'), indexContents)
      fs.writeFileSync(join(newProblemDirectory, 'README.md'), readmeContents)
      console.log(colors.blue(`Problem ${newProblemNumber} directory created.`))
    } else {
      console.log(
        colors.yellow(`Problem ${newProblemNumber} directory already exists.`)
      )
    }
  } catch (err) {
    console.error(
      colors.red(`Could not create directory for problem ${newProblemNumber}`)
    )
    console.error(err)
    fs.removeSync(newProblemDirectory)
  }
}
