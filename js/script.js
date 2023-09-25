const posts = [
    {
        "id": 1,
        "content": "Il mare non sa niente del passato. Sta lì, non ci chiederà mai di spiegargli nulla. Le stelle, la luna, stanno lì, e continuano a illuminarci, brillano per noi. Che cosa vuoi che importi, a loro, quello che è successo? Ci fanno compagnia e ne sono felici.",
        "media": "https://unsplash.it/600/300?image=16",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2023-06-25"
    },
    {
        "id": 2,
        "content": "Non siamo tutti forti uguali. Alcuni di noi non sono capaci di sconfiggere i propri mostri, imparano solo a camminarci insieme.",
        "media": "https://unsplash.it/600/400?photo-1524088484081",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=174"
        },
        "likes": 120,
        "created": "2023-09-03"
    },
    {
        "id": 3,
        "content": "Versare un espresso è un'arte che richiede che il barista si prenda cura della qualità della bevanda",
        "media": "https://unsplash.it/600/400?image=431",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2023-05-15"
    },
    {
        "id": 4,
        "content": "Noi uomini non siamo soggetti né alle grandigioie né ai grandi dolori, perché queste gioie e questi dolori ci giungono avvolti in un’immensa nebbia di piccoli eventi. E la vita non è altro che questo, nebbia. La vita è una nebulosa.",
        "media": "https://unsplash.it/600/400?image=172",
        "author": {
            "name": "Luca Formicola",
            "image": 66
        },
        "likes": 56,
        "created": "2023-04-03"
    },
    {
        "id": 5,
        "content": "Il concetto chiave non è più la ‘presenza’ in rete, ma la ‘connessione’: se si è presenti ma non connessi, si è soli.",
        "media": "https://unsplash.it/600/400?image=816",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];



function newPost(post) {
  return `<div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img
            class="profile-pic"
            src=${post.author.image}
            alt=${post.author.name}
          />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${post.author.name}</div>
          <div class="post-meta__time">${post.created}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
      ${post.content}
    </div>
    <div class="post__image">
      <img src=${post.media} alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" href="#" data-postid="1">
            <i
              class="like-button__icon fas fa-thumbs-up"
              aria-hidden="true"
            ></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">
          Piace a
          <b id="like-counter-1" class="js-likes-counter">
            ${post.likes}
          </b>
          persone
        </div>
      </div>
    </div>
  </div>`;
}


//querySelectors
const container = document.querySelector('#container');

for (let i = 0; i < posts.length; i++) {
  //manipolazioni date
  posts[i].created = posts[i].created.split('-').reverse().join('/');
  container.innerHTML += newPost(posts[i]);
}

//aggiunta eventi ai like buttons
const likedID = [];
const likeButtons = document.querySelectorAll('.like-button');

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', function (e) {
  //aggiunta classe like ai button e link all'id nel array likeID
     e.preventDefault();
    if (!likedID.includes(posts[i].id)) {
      likeButtons[i].classList.add('like-button--liked');
      //aumneta i like nell' oggetto e nel html
      document.querySelectorAll('#like-counter-1')[i].innerHTML = ++posts[i]
        .likes;
      //aggiunto alla lista dei post 'likati
      likedID.push(posts[i].id);
    } else {
      likeButtons[i].classList.remove('like-button--liked');
      document.querySelectorAll('#like-counter-1')[i].innerHTML = --posts[i]
        .likes;
      likedID.pop(posts[i].id);
    }
  });
}