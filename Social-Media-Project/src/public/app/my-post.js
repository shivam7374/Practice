function loadPosts() {
  window.currentUser = window.localStorage.user
  ? JSON.parse(window.localStorage.user)
  : null

    $.get('/api/myposts/'+currentUser.id, (posts) => {
        console.log("++++++++++++++++++")
        console.log(posts)
        console.log("++++++++++++++++++")// working till here
      for (let p of posts) {
        $('#my-posts-container').append(
          $(`
          <div class="col-4">
            <div class="card m-2">
              <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <p class="card-text">
                  ${p.body.substr(0, 200)}
                  <a href="#">...read more</a>
                </p>
                <a href="http://localhost:8483/api/posts/comments/${p.id}/endpoint" class="card-link">Comment</a>
                <a href="#" class="card-link">Like</a>
              </div>
            </div>
          </div>
          
          `)
        )
      }
    })
  }
  
//   loadPosts()