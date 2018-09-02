const PROTO_PATH = './notes.proto';
const grpc = require('grpc');
const NoteService = grpc.load(PROTO_PATH).NoteService
const client = new NoteService('localhost:50051',
    grpc.credentials.createInsecure());

module.exports = client