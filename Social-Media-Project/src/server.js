const express = require('express')

const { db } = require('./db/models')
const { usersRoute } = require('./routes/users')
const { postsRoute } = require('./routes/posts')
const { commentsRoute } = require('./routes/posts/comments.js')
const { mypostsRoute } = require('./routes/myposts')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/api/posts/comments', commentsRoute)
app.use('/api/myposts', mypostsRoute)
app.use('/', express.static(__dirname + '/public'))
// app.use('/api/posts/comments/:id', express.static(__dirname + '/public/components/comment.html'))
db.sync()
  .then(() => {
    app.listen(8583, () => {
      console.log('server started on http://localhost:8583')
    })
  })
  .catch((err) => {
    console.error(new Error('Could not start database'))
    console.error(err)
  })
