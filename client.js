const grpcLibrary = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

const notesProto = grpcLibrary.loadPackageDefinition(protoLoader.loadSync('notes.proto'));

const client = new notesProto.NoteService('localhost:5005', grpcLibrary.credentials.createInsecure());
module.exports = client