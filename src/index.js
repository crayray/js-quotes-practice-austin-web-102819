// It might be a good idea to add event listener to make sure this file 
// only runs after the DOM has finshed loading. 
window.addEventListener("DOMContentLoaded", () => {
    const quoteContainer = document.getElementById('quote-list');

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
                <button class='btn-success'>Likes: <span>${quoteOutput[quote].likes}</span></button>
                <button class='btn-danger'>Delete</button>
                </blockquote>
            </li>`
                
            quoteContainer.appendChild(li);
        }
        
    }

  fetchQuotes(); 
  parseQuotes();    
});