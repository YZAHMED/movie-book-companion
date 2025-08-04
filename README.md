# Movie & Book Companion

live at: https://movie-book-companion.vercel.app/

A web app that helps you discover connections between movies and books! Search for movies and find the books they're based on, or search for books and see if they've been made into movies.

## What This App Does

This is a Node.js web application I built for my Full-Stack Web Development course. It uses two different APIs to create a useful tool for movie and book lovers:

- **Search for movies** and find related books (novelizations, source material, etc.)
- **Search for books** and find movie adaptations
- **View detailed info** about both movies and books
- **Discover new content** you might like

## Features

- 🔍 **Search both movies and books** at the same time
- 🎬 **Real movie data** from OMDB API (with posters, ratings, cast info)
- 📚 **Real book data** from Google Books API (with covers, authors, descriptions)
- 📱 **Works on phones and computers** (responsive design)
- ⚡ **Fast and easy to use** with instant search results
- 🎨 **Looks professional** with modern design

## How to Run This Project

### What You Need First:
- **Node.js** installed on your computer
- **An OMDB API key** (free from http://www.omdbapi.com/)

### Step-by-Step Setup:

1. **Download the project files**
   ```bash
   git clone <your-repo-url>
   cd movie-book-companion
   ```

2. **Install the required packages**
   ```bash
   npm install
   ```

3. **Get your API key** (if you don't have one)
   - Go to http://www.omdbapi.com/
   - Sign up for a free API key
   - Copy the key

4. **Update the API key in the code**
   - Open `app.js` in a text editor
   - Find the line with `apikey=3ec744b4`
   - Replace `3ec744b4` with your own API key

5. **Start the app**
   ```bash
   npm start
   ```

6. **Open in your browser**
   - Go to `http://localhost:3000`
   - You should see the app running!

## How to Use the App

1. **Search for something**
   - Type a movie or book title in the search box
   - Choose whether you want movies, books, or both
   - Click "Search"

2. **Browse the results**
   - You'll see cards with movie posters or book covers
   - Click on any card to see more details

3. **Explore related content**
   - On movie pages, you'll see related books
   - On book pages, you'll see related movies

## What's Inside the Project

```
movie-book-companion/
├── app.js                 # Main server file (Express.js)
├── package.json           # List of packages this project needs
├── README.md             # This file
├── public/
│   └── style.css         # All the styling and colors
├── views/
│   ├── index.pug         # Home page
│   ├── search.pug        # Search results page
│   ├── movie.pug         # Individual movie page
│   ├── book.pug          # Individual book page
│   └── about.pug         # About page
└── node_modules/         # Downloaded packages (don't include this)
```

## APIs I Used

### OMDB API (for movies)
- **Website**: http://www.omdbapi.com/
- **What it gives me**: Movie titles, years, directors, actors, plots, ratings, posters
- **Why I chose it**: It's free, reliable, and has tons of movie data

### Google Books API (for books)
- **Website**: https://developers.google.com/books
- **What it gives me**: Book titles, authors, descriptions, covers, publication dates
- **Why I chose it**: Also free, no API key needed, great book data

## Design Choices

I wanted to make this app look professional and modern:
- **Purple gradient background** - looks modern and appealing
- **Card-based layout** - easy to scan and browse
- **Responsive design** - works great on phones and computers
- **Smooth animations** - makes the app feel polished
- **Clean typography** - easy to read

## Troubleshooting

### Common Problems:

**"No search results"**
- Try different search terms
- Check your internet connection
- 
**"App won't start"**
- Make sure you ran `npm install`
- Check that Node.js is installed
- Look for error messages in the terminal

## Course Information

- **Course**: Full-Stack Web Development - HTTP-5222-0NB
- **Institution**: Humber College
- **Student**: Yaqoob Zahoor Ahmed
- **Project**: JS/XML Project (APIs)

## What I Learned

This project taught me:
- How to work with multiple APIs in one application
- Building a full-stack web app with Node.js and Express
- Creating responsive designs that work on all devices
- Handling errors and edge cases
- Deploying web applications

## Future Improvements

If I had more time, I'd add:
- User accounts to save favorite movies/books
- More detailed movie/book comparisons
- Social features (reviews, ratings)
- Better search filters
- Dark mode option

---

**Thanks for checking out my project!** 🎬📚

Feel free to reach out if you have questions or suggestions! 
