#!/usr/bin/env node

import { join } from 'path'

import execa from 'execa'
import fs from 'fs-extra'
import glob from 'glob'
import Listr from 'listr'
import _ from 'lodash'
import Mustache from 'mustache'
import prompts from 'prompts'
import yargs from 'yargs'

import packageJson from '../package.json'

const projectRoot = process.cwd()

const app = {
  name: packageJson.name,
  version: packageJson.version,
  repoUrl: packageJson.repository.url.replace(/\.git$/, ''),
  developer: packageJson.author,
}

const argv = yargs
  .scriptName(app.name)
  .version(app.version)
  .strict()
  .command('$0', 'Create a new UI component.', (yargs) =>
    yargs
      .option('appname', {
        alias: 'A',
        desc: 'Application name, can be capital, and space name',
        type: 'string',
      })
      .option('destination', {
        alias: 'D',
        desc: 'Specify destination, instead using default package folder',
        type: 'string',
      })
  )
  .epilogue(`Copyright 2021 by ${app.developer} (${app.repoUrl})`).argv

const template = fs.realpath(join(__dirname, '..', 'template'))
const filename = argv.appname || ''
const filepath = argv.destination || `${projectRoot}/packages`

type Answers = {
  name: string
  description: string
  repositoryUrl: string
  author: string
  filename: string
  filepath: string
  shouldRunBootstrap: boolean
}

const getPrompts: () => Promise<Answers> = async () => {
  const response = await prompts(
    [
      {
        type: 'text',
        name: 'name',
        message: 'Application name',
        initial: filename,
      },
      {
        type: 'toggle',
        name: 'useDefaultLocation',
        message: 'Install in the default packages folder?',
        initial: true,
        active: 'yes',
        inactive: 'no',
      },
      {
        type: (prev) => (prev ? null : 'text'),
        name: 'name',
        message: 'Application name',
        initial: filename,
      },
      {
        type: 'text',
        name: 'description',
        message: 'Application description',
      },
      {
        type: 'text',
        name: 'repositoryUrl',
        message: 'Repository url',
        initial: app.repoUrl,
      },
      {
        type: 'text',
        name: 'authorName',
        message: 'Author name',
        initial: app.developer,
      },
      {
        type: 'toggle',
        name: 'shouldRunBootstrap',
        message: 'Do you want bootstrap with lerna?',
        initial: true,
        active: 'yes',
        inactive: 'no',
      },
    ],
    {
      onCancel: () => {
        // eslint-disable-next-line no-console
        console.log('Cancelled by the user')
        process.exit(1)
      },
    }
  )

  const data: Answers = {
    name: _.kebabCase(response.name),
    description: response.description,
    repositoryUrl: response.repositoryUrl,
    author: response.authorName,
    filename: _.upperFirst(_.camelCase(response.name)),
    filepath: `${filepath}/${_.kebabCase(response.name)}`,
    shouldRunBootstrap: response.shouldRunBootstrap,
  }

  return data
}

export const init = async () => {
  const data = await getPrompts()
  const progress = new Listr()

  progress.add({
    title: `Creating component folder at ${filepath}`,
    task: async (ctx: { data: Answers }) => {
      fs.copySync(await template, ctx.data.filepath, {
        recursive: true,
        overwrite: true,
      })
    },
  })

  progress.add({
    title: 'Renaming files in the new component folder and add component data',
    task: (ctx: { data: Answers }) => {
      const replaceString = '__COMPONENT_NAME__'
      glob(ctx.data.filepath + '/**/*', (err, files) => {
        if (err) return
        files.forEach((file) => {
          if (!fs.statSync(file).isFile()) return
          const content = fs.readFileSync(file)
          const newFile = Mustache.render(content.toString(), ctx.data)
          fs.outputFileSync(file, newFile)
          if (!file.match(replaceString)) return
          fs.renameSync(file, file.replace(replaceString, ctx.data.filename))
        })
      })
    },
  })

  progress.add({
    title: 'Bootstrap dependencies by lerna',
    enabled: (ctx: { data: Answers }) => ctx.data.shouldRunBootstrap,
    task: () => {
      execa('cd', [projectRoot])
      execa('yarn', ['bootstrap'])
    },
  })

  progress.run({ data })
}
