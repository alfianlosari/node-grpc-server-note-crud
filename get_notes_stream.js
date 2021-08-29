const client = require('./client')

const call = client.listSteam()

call.on('data',function(response){
    console.log(response);
});

call.on('end',function(){
    console.log('successfully fetch List notes');
});