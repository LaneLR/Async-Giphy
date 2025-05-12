require("dotenv").config();

// Print out value of API key stored in .env file
async function getImage(query) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=gfMs7vGi9QVQkckQYuOcXeOqMxU3hFbv&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );
    const data = await response.json();

    const randomNum = Math.floor(Math.random() * 26); //pick random number between 0 and 25

    if (data.data[randomNum]) { 
      //if the object at index randomNum exists
      const url = data.data[randomNum].images.original.url;
      console.log(url);
      return url;
    } else {
      console.warn("This data does not exist.");
      return null;
    }
  } catch (err) {
    console.error("Ran into an error: ", err);
  }
}

getImage("spongebob");
