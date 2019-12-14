// It might be a good idea to add event listener to make sure this file 
// only runs after the DOM has finshed loading. 
window.addEventListener("DOMContentLoaded", () => {
    const quoteContainer = document.getElementById('quote-list');
    let likeCount;

    // Populate quotes
        // Make a FETCH get call to http://localhost:3000/quotes?_embed=likes
        // Return the data from the call to another function
            // This function will iterate through the nested data to print out the info (starts line 20)
    const fetchQuotes = () => {
            fetch('http://localhost:3000/quotes?_embed=likes')
            .then(response => response.json())
            .then(data => {
              let quoteOutput = data
              parseQuotes(quoteOutput);
            })
        }

    const parseQuotes = (quoteOutput) => {
        // console.log(quoteOutput);
        for(quote in quoteOutput){
            // console.log(quote.quote)
                // console.log(quoteOutput[quote].likes);
                let li = document.createElement('li');
                li.innerHTML = `<li class='quote-card'>
                <blockquote class="blockquote">
                <p class="mb-0">${quoteOutput[quote].quote}</p>
                <footer class="blockquote-footer">${quoteOutput[quote].author}</footer>
                <br>
                </blockquote>
                <div id = "likes">
                </div>
                <button class='btn-danger'>Delete</button>
            </li>`
            console.log(quoteOutput[quote]);
               //find likes
               // For some reason, I cannot call likeCount.length to get the count of likes. The error is:
               //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
               for (likes in quoteOutput[quote]){
                //    console.log(quoteOutput[quote][likes].length);
                    likeCount = quoteOutput[quote][likes]
                    console.log(likeCount);
                    
                   let likeButton = document.createElement('div');
                   likeButton.innerHtml= `  <button class='btn-success'>Likes: <span></span></button>`
               } 
            
            quoteContainer.appendChild(li);
        }
        
    }


  fetchQuotes(); 
  parseQuotes();    
});