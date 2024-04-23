const express = require('express')
const cors=require('cors');

const app = express()
const port = 3000

app.use(cors())

app.get('/search', async(req, res) => {
   
    fetch('https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Nandan').then(response=>{
        return response.json();
    }).then(response=>{
        res.send(response);
    })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})