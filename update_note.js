const client = require('./client')

const updateNote = {
    id: '1',
    title: 'Hello',
    content: 'World'
}

client.update(updateNote, (error, note) => {
    if (!error) {
        console.log('Note has been updated successfully', note)
    } else {
        console.error(error)
    }
})