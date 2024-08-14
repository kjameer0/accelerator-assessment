const express = require("express");
const animes = express.Router();
const {
  getAllAnimes,
  getOneAnime,
  createOneAnime,
  updateOneAnime,
  deleteOneAnime,
} = require("../queries/animes");

/* Instructions: Use the following prompts to write the corresponding routes. **Each** route should be able to catch server-side and user input errors(should they apply). Consult the test files to see how the routes and errors should work.*/
//Write a GET route that retrieves all animes from the database and sends them to the client with a 200 status code
//your response body should look this(ignore the length of the array):

  animes.get('/', async (req, res)=> {
  try{
    const allAnimes = await getAllAnimes()
    if(allAnimes) {
      res.status(200).json(allAnimes)
    } else {
      res.status(400).json({error:"Unable to retrieve List of Anime!"})
    }
  }catch(err){
    res.status(404).json({error:err})
  }
  })

  animes.get('/:id', async (req, res)=> {

  try{
    const { id } = req.params
    const oneAnime = await getOneAnime(id)
    if(oneAnime.id){
      res.status(200).json(oneAnime)
    } else {
      res.status(400).json({error:"No anime with the ID entered exists! Try Again Please!"})
    }
  }catch(err){
    res.status(400).json({err: "No Anime with that ID exists. Please Try Again!"})
  }

  })


  animes.post('/', async (req, res)=> {
    try{
      const newAnime = await createOneAnime(req.body)
        res.status(201).json(newAnime)
      }catch(err){
        res.status(404).json({error: err})
    }
  })

  animes.put('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
      const revisedAnime = await updateOneAnime(id, req.body);
      
      if (revisedAnime) {
        res.status(200).json(revisedAnime);
      } else {
        res.status(404).json({ error: "Anime not found or could not be updated." });
      }
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
  });
  

  animes.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const removeAnime = await deleteOneAnime(id);
  
      if (removeAnime) {
        res.status(200).json({ message: "Successfully removed Anime", data: removeAnime });
      } else {
        res.status(404).json({ error: "Anime not found or already deleted" });
      }
    } catch (err) {
      res.status(500).json({ error: "An error occurred while trying to remove the anime", details: err.message });
    }
  });
  
//Write a POST route that takes user provided data from the request body and creates a new anime in the database. The route should respond with a 201 status code and the new anime.
//if the request body does not contain a name and description, or if the body's name or description have no length, respond with an error
//your response body should look this:
// {
//   "id": 20,
//   "name": "test",
//   "description": "this is anime"
// }

//Write a PUT route that takes user provided data from the request body and updates an existing anime in the database. The route should respond with a 200 and the updated anime. The route should be able to handle a non-existent anime id.
//if the request body does not contain a name and description, or if the body's name or description have no length, respond with an error
//your response body should look this:
// {
//   "id": 20,
//   "name": "test1",
//   "description": "this is anime as well"
// }

//Write a DELETE route that deletes a single anime by id (provided by the client as a request param) from the database and responds with a 200 and the deleted anime data. The route should be able to handle a non-existent anime id.
//your response body should look this:
// {
//   "id": 20,
//   "name": "test1",
//   "description": "this is anime as well"
// }
module.exports = animes;
