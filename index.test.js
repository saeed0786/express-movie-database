const {Model} = require('./index')
const {sequelize} = require('./db')
const {Movie} = require('./model/movie')
const {Crew} = require('./model/crew')
const {Cast} = require('./model/cast')


describe('movie Database', () => {
    beforeAll(async() => {
        await sequelize.sync({force:true})
    })
  const arrayOfcrews =[ 
    {crew_id: 1001, name: 'Jack Dawson', position: 'Hero', producer:'James Cameron'},
    {crew_id: 1002, name: 'Julie Christie', position: 'Hero', producer:'David Barron'},
    {crew_id: 1003, name: 'Harvey Keite', position: 'Hero', producer:'Lawrence Bender'},
]
    const arrayOfCast= [
        {cast_id: 101, role_name:'American dreamer', gender:'male', paid_amount: 2500000},
        {cast_id: 102, role_name:' Queen Gertrude', gender:'Female', paid_amount: 200000},
        {cast_id: 103, role_name:' tough guy', gender:'male', paid_amount: 150000},
        
]
const arrayOfmovies=[
    {movie_id:1, movie_title:'Titanic'},
    {movie_id:2, movie_title: 'Hamlet'},
    {movie_id:3, movie_title:'Reservoir Dogs'}
]
  
test('Movie has movies', async() => {
    await Movie.bulkCreate(arrayOfmovies)
       const testmovie = await Movie.findOne({
        where: {
            movie_title: 'Titanic'
        }
      });
      expect(testmovie.movie_title).toBe('Titanic')
    })


    test('Crew has name ', async() => {
        await Crew.bulkCreate(arrayOfcrews)
           const testcrew= await Crew.findOne({
            where: {
                name: 'Jack Dawson'
            }
          });
          expect(testcrew.name).toBe('Jack Dawson')
        })


        test('Cast paid for the movie', async() => {
            await Cast.bulkCreate(arrayOfCast)
               const testcast= await Cast.findOne({
                where: {
                    paid_amount: 2500000
                }
              });
              expect(testcast.paid_amount).toBe(2500000)
            })
afterAll(async()=> {
    // await sequelize.sync({force:true})
    sequelize.close()
})
})