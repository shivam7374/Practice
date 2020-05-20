function loadPostsComments() {
    let start,end
    start=(document.URL.search("comments/")+9)
    end=document.URL.search("/endpoint")
    let id=parseInt(document.URL.slice(start,end))
    $.get('http://localhost:8483/api/posts/comments/2', (posts) => {
      console.log("++++++++++++++++++")
      console.log(posts)
      console.log("++++++++++++++++++")// working till here
      for (let p of posts) {
        $('#posts-container').append(
          $(`
          <div class="col-4">
            <div class="card m-2">
              <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${p.title}</h6>
                <p class="card-text">
                  ${p.body.substr(0, 200)}
                  <a href="#">...read more</a>
                </p>
                <a href="#" class="card-link">Like</a>
              </div>
            </div>
          </div>
          
          `)
        )
      }
    })
  }
  