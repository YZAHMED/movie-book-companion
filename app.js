const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/search', async (req, res) => {
    const query = req.query.q;
    const type = req.query.type;
    
    if (!query) {
        return res.render('search', { results: [], query: '', type: '' });
    }

    try {
        let results = [];
        
        if (type === 'movie') {
            try {
                const movieResponse = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=3ec744b4`);
                if (movieResponse.data.Search) {
                    results = movieResponse.data.Search.slice(0, 10);
                } else {
                    results = [];
                }
            } catch (error) {
                console.error('Movie API error:', error);
                results = [];
            }
        } else if (type === 'book') {
            const bookResponse = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`);
            if (bookResponse.data.items) {
                results = bookResponse.data.items;
            }
        } else if (type === 'both') {
            // Search for both movies and books
            try {
                const [movieResponse, bookResponse] = await Promise.all([
                    axios.get(`http://www.omdbapi.com/?s=${query}&apikey=3ec744b4`),
                    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5`)
                ]);
                
                const movies = movieResponse.data.Search ? movieResponse.data.Search.slice(0, 5) : [];
                const books = bookResponse.data.items ? bookResponse.data.items.slice(0, 5) : [];
                results = [...movies, ...books];
            } catch (error) {
                console.error('Both search error:', error);
                results = [];
            }
        }
        
        res.render('search', { results, query, type });
    } catch (error) {
        console.error('Search error:', error);
        res.render('search', { results: [], query, type, error: 'Search failed' });
    }
});

app.get('/movie/:id', async (req, res) => {
    try {
        const movieResponse = await axios.get(`http://www.omdbapi.com/?i=${req.params.id}&apikey=3ec744b4`);
        const movie = movieResponse.data;
        
        const bookResponse = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${movie.Title}&maxResults=5`);
        const relatedBooks = bookResponse.data.items || [];
        
        res.render('movie', { movie, relatedBooks });
    } catch (error) {
        console.error('Movie detail error:', error);
        res.status(500).send('Error loading movie details');
    }
});

app.get('/book/:id', async (req, res) => {
    try {
        const bookResponse = await axios.get(`https://www.googleapis.com/books/v1/volumes/${req.params.id}`);
        const book = bookResponse.data;
        
        const movieResponse = await axios.get(`http://www.omdbapi.com/?s=${book.volumeInfo.title}&apikey=free`);
        const relatedMovies = movieResponse.data.Search || [];
        
        res.render('book', { book, relatedMovies });
    } catch (error) {
        console.error('Book detail error:', error);
        res.status(500).send('Error loading book details');
    }
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 