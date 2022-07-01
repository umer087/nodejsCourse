const chalk      = require('chalk');
const getNotes   = require('./notes.js')
const yargs      = require('yargs');
const fs         = require('fs');

const fileBuffer   = fs.readFileSync('sample-file.json')
const parsedObject = JSON.parse(fileBuffer.toString())
parsedObject.title = 'Updated Title'
const sampleJson = JSON.stringify(parsedObject)
fs.writeFileSync('sample-file.json',sampleJson)
const updatedFileBuffer   = fs.readFileSync('sample-file.json')
const updatedObject = JSON.parse(fileBuffer.toString())
// console.log("sampleJson",updatedObject)
// console.log("parsedObject",parsedObject)

return;
yargs.command({
    command: 'add',
    describe: 'Adding a command',
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
    handler: function (argv){
        console.log(`Add handler\n Title: ${argv.title} \n Body: ${argv.body}`);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note');
    }
})

yargs.command({
    command: 'list',
    describe: 'List the note',
    handler: function(){
        console.log('List of notes');
    }
})

yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function(){
        console.log('Read notes');
    }
})

yargs.parse()