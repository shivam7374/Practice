function loadPostsComments() {
    let start,end
    start=(document.URL.search("comments/")+9)
    end=document.URL.search("/endpoint")
    let id=parseInt(document.URL.slice(start,end))
    $.get('http://localhost:8483/api/posts/comments/'+id, (post) => {
      console.log("++++++++++++++++++")
      console.log(post)
      console.log("++++++++++++++++++")// working till here
      {
        $('#posts-container').append(
          $(`
          <div class="col-4">
            <div class="card m-2">
              <div class="card-body">
                <h5 class="card-title">${post[0].title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${post[0].title}</h6>
                <p class="card-text">
                  ${post[0].body}
                  <a href="#">...read more</a>
                </p>
                <a href="#" class="card-link">Like</a>
              </div>
            </div>
          </div>
          <br><br><h1><div class='col-4'>COMMENTS</div></h1>               
          
          `)
        )
      }
      for (let p of post[0].comments) {
        $('#posts-container').append(
          $(`
          <br>
          {
            Title->>${p.title}
            Body->>${p.body}
          }
          <br>
          
          
          `)
        )
      }
    })
  }
  