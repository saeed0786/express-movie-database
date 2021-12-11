const express = require('express')
const {Model} = require('./index')
const path = require('path') 
const { Crew, Movie, Cast } = require('./index')
const app = express()
const port = 3000

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))


app.get('/crew/:id', async (req,res) => {
const thisCrew = await Crew.findByPk(req.params.id)
    res.json(thisCrew)
})
//GET method on /Movie  route returns all Movies
app.get('/movies', async (req,res) => {
    const allMovies = await Movie.findAll()
    res.json(allMovies)
})

//Create movie in a movies table as a new entry

app.post('/movies', async (req,res) => {
    
    let newMovie = await Movie.create(req.body)
    //send a response string
    res.send(newMovie ? 'Movie created': 'post failed')
})

//put method for crew
app.post('/crews', async (req,res) => {
    
    let newCrews = await Crew.create(req.body)
    //send a response string
    res.send(newCrews ? 'Crews created ': 'post failed')
})





//update one crew by id
app.put('/crew/:id', async (req,res) => {
    let updatedCrew = await Crew.update(req.body, {
        where : {id:req.params.id}
    })
    res.send(updatedCrew ? "Crew Updated" : "Update Failed")
})


//Get method on crew will route return all crew members
app.get('/crews', async (req,res) => {
    const allCrew = await Crew.findAll()
    res.json(allCrew)
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
 //find all cast table
app.get('/cast', async (req,res) => {
    const allCast = await Cast.findAll()
    res.json(allCast)
})

//return one cast by name
app.get('./crew/:role_name', async (req, res) =>{
    const thisCast = await Cast.findOne({where:{role_name: req.params.role_name}})
    res.jason(thisCast)
})



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
