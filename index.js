require('dotenv').config();
const giphy = 'https://api.giphy.com/v1/gifs/search?api_key=gfMs7vGi9QVQkckQYuOcXeOqMxU3hFbv&q=spongebob&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)