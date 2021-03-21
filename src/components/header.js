const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div')
  const dateCreate = document.createElement('span')
  const titleCreate = document.createElement('h1')
  const tempCreate = document.createElement('span')

  header.appendChild(dateCreate)
  header.appendChild(titleCreate)
  header.appendChild(tempCreate)

  header.classList.add('header')
  dateCreate.classList.add('date')
  tempCreate.classList.add('temp')

  titleCreate.textContent = title
  dateCreate.textContent = date
  tempCreate.textContent = temp
  return header;

}

const selecHeader = document.querySelector('.header-container')
const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const callHeader = Header('Lambda Times', 'MARCH 6, 2021', '26°')
  selecHeader.appendChild(callHeader)
}

export { Header, headerAppender }
