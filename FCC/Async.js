// const res = require('express/lib/response')
const { readFile, writeFile} = require('fs')

console.log('start');
readFile('././FCC/Content/Subfolder/First.txt','utf8', (err, result) =>{
    if(err)
    {
        console.log(err)
        return
    }

    const first = result;
    // console.log(result)

    readFile('././FCC/Content/Subfolder/Second.txt', 'utf8', (err, result) => {
        if(err)
        {
            console.log(err)
            return
        }
        const second = result;

        writeFile('./FCC/Content/Subfolder/Async.txt', `The result is as follows: ${first}, ${second}`,
        (err, result) => {
            if(err) {
                console.log(err);
                return
            }

            console.log('done with the task');
        })


    })
})

console.log('starting the next task');

// writeFileSync('./FCC/Content/Subfolder/Result.txt', 
// `Here is the result : ${first}, ${second}`,
// { flag: 'a'}
// )
