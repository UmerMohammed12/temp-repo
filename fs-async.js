const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf8', (err, result)=>{

    if(err)return;
    console.log(result);//Hello this is first text file

    const first = result;
    readFile('./content/second.txt',
        'utf8',
        (err,result)=>{
        if(err)return;
       
        const second = result;
        writeFile('./content/result-async.txt',
            `Here is the result:  ${first}, ${second}`,
            (err,result)=>{
            if (err)return;
            console.log('done with this task')
        })
     })
})

console.log('starting next task');

