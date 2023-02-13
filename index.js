const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const post = posts.map((ele) => {
  const section = document.createElement("section");
  section.classList.add("post");
  document.body.append(section);

  return (section.innerHTML = `
  <div class="post-heading">
  <img class="user" src="${ele.avatar}" />
  <div class="name-loc">
    <p class="name">${ele.name}</p>
    <p class="location">${ele.location}</p>
  </div>
</div>
<img class="post-image" src="${ele.post}" />
<div class="interacions">
  <img class="int-img" src="images/icon-heart.png" />
  <img class="int-img" src="images/icon-comment.png" />
  <img class="int-img" src="images/icon-dm.png" />
</div>
<p class="likes">${ele.likes} likes</p>
<div class="comment-section">
  <p class="username">${ele.username}</p>
  <p class="comment">${ele.comment}</p>
</div>`);
});

//another way to render html

// const container = document.createElement("div");
// posts.forEach((post) => {
//   const postDiv = document.createElement("div");
//   postDiv.classList.add("post");

//   const avatar = document.createElement("img");
//   avatar.src = post.avatar;
//   postDiv.appendChild(avatar);

//   const name = document.createElement("p");
//   name.innerHTML = `Name: ${post.name}`;
//   postDiv.appendChild(name);

//   const username = document.createElement("p");
//   username.innerHTML = `Username: ${post.username}`;
//   postDiv.appendChild(username);

//   const location = document.createElement("p");
//   location.innerHTML = `Location: ${post.location}`;
//   postDiv.appendChild(location);

//   const image = document.createElement("img");
//   image.src = post.post;
//   postDiv.appendChild(image);

//   const comment = document.createElement("p");
//   comment.innerHTML = `Comment: ${post.comment}`;
//   postDiv.appendChild(comment);

//   const likes = document.createElement("p");
//   likes.innerHTML = `Likes: ${post.likes}`;
//   postDiv.appendChild(likes);

//   container.appendChild(postDiv);
// });

// document.body.appendChild(container);
