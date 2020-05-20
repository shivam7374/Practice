const { Router } = require('express')
const {
  findAllmyPosts
} = require('../../controllers/posts')

const route = Router()

route.get('/:id', async (req, res) => {
    // console.log("****************")
    // console.log(req.params.id)
    // console.log("****************")
  const myposts = await findAllmyPosts(req.params.id)
  console.log("****************++++++++++++++")
    console.log(myposts)
    console.log("****************++++++++++++")
  res.status(200).send(myposts)
  // res.render(myposts)
})
 
module.exports = {
  mypostsRoute: route
}