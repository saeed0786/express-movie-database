const express = require('express')
const {Model} = require('./index')
const path = require('path') 
const { Crew, Movie, Cast } = require('./index')
const app = express()
const port = 3000

app.use(express.json())

app.use(express.static(path.join(__dirname)))


app.get('/crew/:id', async (req,res) => {
const thisCrew = await Crew.findByPk(req.params.id)
    res.json(thisCrew)
})
//GET method on /Crew  route returns all crews
app.get('/movies', async (req,res) => {
    const allMovies = await Movie.findAll()
    res.json(allMovies)
})

//update one crew by id
app.put('/crew/:id', async (req,res) => {
    let updatedCrew = await Crew.update(req.body, {
        where : {id:req.params.id}
    })
    res.send(updatedCrew ? "Crew Updated" : "Update Failed")
})

//return one Crew by id
app.get('/crew/:id', async (req,res) => {
   const thisCrew = await Crew.findByPk(req.params.id)
    res.json(thisCrew)
})

//delete one crew by id
app.delete('/crew/:id', async (req, res) => {
    const deleted = await Crew.destroy({
       where:{id:req.params.id}

    })
    res.send(deleted ? "Deleted Crew" : "Deletion Failed")
})

app.get('/crew', async (req,res) => {
    const allCrew = await Crew.findAll()
    res.json(allCrew)
})






app.get('/cast', async (req,res) => {
    const allCast = await Cast.findAll()
    res.json(allCast)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
