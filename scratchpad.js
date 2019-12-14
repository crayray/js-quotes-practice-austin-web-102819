const getLikes = () => {
    for(likes in quoteOutput[quote].quote) {
        console.log(quoteOutput[quote].quote.likes);
        
    }
}
//Trying to call another function to get the likes (iterate through the sub array):
const getLikes = () => {
    for(likes in quoteOutput) {
        console.log(this);
        
    }
}