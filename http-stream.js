const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {

    const fileStream = fs.createReadStream('./content/bit.txt','utf-8')
  
    fileStream.on('open', () => {
        fileStream.pipe() 
    })
    
    fileStream.on('error',(error) => {
        console.log(error)
        res.end(error)
    })
    
})

server.listen(8000)