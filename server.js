const express = require("express")
const server = express()

PORT  = process.env.PORT|| 5000
server.listen(PORT , _=>{console.log(`http://localhost:${PORT}`)

})

server.use("/" , (req ,res , next)=>{
    
    console.log("hazem")
 
    next()
})
server.use("/" , (req, res)=>{
   console.log("sddfg")
   res.send('welcom hazem ben saria') 
})