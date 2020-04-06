const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handle(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler() {
        console.log(chalk.greenBright("Your notes"));
        notes.listNotes();
        
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
        
    }
})
//add, remove, read, list


yargs.parse()
//console.log(yargs.argv)




/*

const chalk = require('chalk')

//validator and load files
const validator = require('validator')
const notes = require('./notes.js')
console.log(notes())
console.log(validator.isEmail('pablitico@hotmail.com'))
//--------------------------------------------------

console.log(chalk.green('Successssss!'))

console.log(process.argv[2])

//--------------------------------------------------

const sum = require('./utils.js')

console.log(sum(4, -2))
*/
