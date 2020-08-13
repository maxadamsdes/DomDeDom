// // 2. Set all elements with class name title to a HTML Collection called titles. Then converts this an array and logs each item of the new array in the console!
// var titles = document.getElementsByClassName('title');
// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));
// Array.from(titles).forEach(function(item){
//     console.log(item);
// })

// ----------------------------------------------------------------------------------------- //

// // 3. Selects an item from basically anywhere as shown in these two demos.
// // Simple:
//  const wrap = document.querySelector('#wrapper');
//  console.log(wrap);
// // Complex:
//  const wmf = document.querySelector('#book-list li:nth-child(2) .name');
//  console.log(wmf);

// // 4. Shows the difference between querySelector & querySelectorAll.
// // 1. Gives one variable
// var books = document.querySelector('#book-list li .name');
// console.log(books);
// // 2. Gives a NodeList of these items.
// var books = document.querySelectorAll('#book-list li .name');
// console.log(books);
// // 3. Shows in array form using forEach. NodeLists do not need to be converted to Arrays btw.
// Array.from(books).forEach(function(book){
//     console.log(book);
// });

// ----------------------------------------------------------------------------------------- //

// // 5. How to change or add to the html content using JavaScript!
// var books = document.querySelectorAll('#book-list li .name');
//
// books.forEach(function(book){
//     book.textContent += 'test';
// });
//
// const bookList = document.querySelector('#book-list');
// // bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>';

// ----------------------------------------------------------------------------------------- //

// // 6. Node Types
// const banner = document.querySelector('#page-banner');
// // Finds node type
// console.log('#page-banner node type is', banner.nodeType);
// // Finds node name
// console.log('#page-banner node name is', banner.nodeName);
// // Finds whether node has children, lol
// console.log('#page-banner has child nodes', banner.hasChildNodes());
// // true includes child and clones to a variable for later use
// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

// ----------------------------------------------------------------------------------------- //

// // 7. Traversing the Dom (part 1)
// // This discovers the parent node of a node
// const bookList = document.querySelector('#book-list');
// console.log('the parent node is', bookList.parentNode);
// // This discovers the parent element of a node, and then the parents parent.
// console.log('the parent element is', bookList.parentElement.parentElement);
// // grabs child nodes including page breaks
// console.log(bookList.childNodes);
// // only grabs actual elements
// console.log(bookList.children);

// ----------------------------------------------------------------------------------------- //

// // 8. Traversing the Dom (part 2)
// // Traverses nodes using siblings
// const bookList = document.querySelector('#book-list');
// // finds next sibling
// console.log('book-list next sibling is:', bookList.nextSibling);
// // finds next element sibling
// console.log('book-list next element sibling is:', bookList.nextElementSibling);
// // finds the previous sibling using above two techniques
// console.log('book-list previous sibling is:', bookList.previousSibling);
// console.log('book-list previous sibling is:', bookList.previousElementSibling);
// // some complex stuff. Searches inside previous element for a p tag and adds a break and text to it.
// bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!';

// ----------------------------------------------------------------------------------------- //

// // 9. Dom Events
// // Adds an event listener to the Book list. 
// var h2 = document.querySelector('#book-list h2');
// h2.addEventListener('click', function(e){
//     console.log(e.target);
//     console.log(e);
// });
// // Adds an event listener for the delete buttons that removes that list item
// var btns = document.querySelectorAll('#book-list .delete');
// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     });
// })
// // adds a listener to a link and then prevents that link from actually loading.
// const link = document.querySelector('#page-banner a');
// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('navigation to', e.target.textContent, 'was prevented');
// })

// ----------------------------------------------------------------------------------------- //

// // 10. Event Bubbling
// // The event 'bubble up' from the div the event occurs on through each of the divs parents.
// // this example fixes the issue where if a new div/element was added, the delete button wouldn't work 
// const list = document.querySelector('#book-list ul');
// // delete books
// list.addEventListener('click', function(e){
//     if(e.target.className == 'delete'){
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// })

// ----------------------------------------------------------------------------------------- //

// // 11. Interacting with Forms
// // document.forms list forms in the html
// // add book-list
// const addForm = document.forms['add-book'];
// // registers text in textbox
// addForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     const value = addForm.querySelector('input[type="text"]').value;
//     console.log(value);
// });

// ----------------------------------------------------------------------------------------- //

// // 12. Creating Elements
// // add books to the list. Continuation of the last tutorial.
// const addForm = document.forms['add-book'];
// addForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     const value = addForm.querySelector('input[type="text"]').value;
//     // create elements
//     const li = document.createElement('li');
//     const bookName = document.createElement('span');
//     const deleteBtn = document.createElement('span');
//     // add content
//     deleteBtn.textContent = 'delete';
//     bookName.textContent = value;
//     // append to document
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);
// });

// ----------------------------------------------------------------------------------------- //

// // 13. Styles and Classes
// // This adds styles to a class 'on the fly'. Commented out for "reasons"
// // var li = document.querySelector('li:last-child');
// // li.style.color = "red";
// // li.style.marginTop = "60px";
// // The following code was altered to include the correct class names.
// // add books
// const addForm = document.forms['add-book'];
// addForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     const value = addForm.querySelector('input[type="text"]').value;   
//     // create elements
//     const li = document.createElement('li');
//     const bookName = document.createElement('span');
//     const deleteBtn = document.createElement('span');
//     // add content
//     deleteBtn.textContent = 'delete';
//     bookName.textContent = value;
//     // add id to element
//     bookName.classList.add('name');
//     deleteBtn.classList.add('delete');
//     // append to document
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);
// });

// ----------------------------------------------------------------------------------------- //

// // 14. Attributes
// // these show examples of getting attributes from a node.
// var book = document.querySelector('li:first-child .name');
// book.getAttribute('class');
// book.getAttribute('href')
// // this changes a nodes attributes
// book.setAttribute('class', 'name-2');
// // this checks whether a node has a given attribute
// book.hasAttribute('class');
// // this removes an attribute
// book.removeAttribute('class');

// ----------------------------------------------------------------------------------------- //

// // 15. Checkboxes & Change Events
// // hide books
// const hideBox = document.querySelector('#hide');
// hideBox.addEventListener('change', function(e){
//     // sets the list to show or hide based on the state of the checkbox
//     if(hideBox.checked){
//         list.style.display = "none";
//     }
//     else
//     {
//         list.style.display = "initial";
//     }
// })

// ----------------------------------------------------------------------------------------- //

// // 16. Custom Search Filter
// // add event listener to search box on update
// // filter books
// const searchBar = document.forms['search-books'].querySelector('input');
// // listens whenever a key is pressed in this field
// searchBar.addEventListener('keyup', function(e){
//     // converts to lower case so it is not case sensitive
//     const term = e.target.value.toLowerCase();
//     // creates constant books based off all li tags in list collection.
//     const books = list.getElementsByTagName('li');
//     Array.from(books).forEach(function(book){
//         // gets the name from the html
//         const title = book.firstElementChild.textContent;
//         // if the name matches it stays displayed. If not it is hidden
//         if(title.toLowerCase().indexOf(term) != -1){
//             book.style.display = 'block';
//         }
//         else
//         {
//             book.style.display = 'none';
//         }
//     })
// })

// ----------------------------------------------------------------------------------------- //

// // 17. Tabbed Content
// // referencing the tabs which is the ul
// const tabs = document.querySelector('.tabs');
// // referencing all of the panels
// const panels = document.querySelectorAll('.panel');
// // adding an event listener to the tabs
// tabs.addEventListener('click', function(e){
//     // if the target is an li element then command executes
//     if(e.target.tagName == "LI"){
//         // references targeted element
//         const targetPanel = document.querySelector(e.target.dataset.target);
//         // cycles through each panel on the page and if it is the targeted panel it adds the active class and deactivates all non-targeted panels
//         panels.forEach(function(panel){
//             if(panel == targetPanel){
//                 panel.classList.add('active');
//             } else {
//                 panel.classList.remove('active');
//             }
//         })
//     }
// })

// ----------------------------------------------------------------------------------------- //

// // 18. DOMContentLoaded Event
// // Wrap the entire JavaScript in the following so that it only runs when all the required elements have loaded.
// document.addEventListener('DOMContentLoaded', function(){
// })