const apiKey = 'LQNz0PViukb2ZCbqdxYlqc8p6MvmJERh';
        
const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

const url = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}`);