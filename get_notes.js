const client = require('./client')
client.list(null, (error, notes) => {
    if (!error) {
        console.log('successfully fetch List notes')
        console.log(notes)
    }
})