import axios from 'axios'

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const authorName = document.createElement('span')

  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgContainer)
  imgContainer.appendChild(img)
  author.appendChild(authorName)

  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  //console.log("Card function article print:  ", article)
  headline.textContent = article.headline
  img.src = article.authorPhoto
  authorName.textContent = article.authorName

  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  card.addEventListener('click',() => {
    headline.classList.toggle("toggle-on")
  })

  return card
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cards = document.querySelector(selector)
  axios.get(`https://lambda-times-api.herokuapp.com/articles`).then(res => {
    const articleObject = res.data.articles;
    //console.log('article object: ',articleObject)
    for (var objectProperty in articleObject){
      //console.log('object property:   ',articleObject[objectProperty])
      for(var insideObjectProperty in articleObject[objectProperty]) {
        //console.log('inside the object property:  ',articleObject[objectProperty][insideObjectProperty])
        const articleCard = Card(articleObject[objectProperty][insideObjectProperty])
        cards.append(articleCard)
      }
    }
  })
}

export { Card, cardAppender }
