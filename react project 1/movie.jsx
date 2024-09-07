// import React from 'react';
// import { Link } from 'react-router-dom'; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MovieHomepage() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [availableSeats] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const movies = [
        { id: 1, title: "Inception", image: "https://i.pinimg.com/originals/89/cd/d7/89cdd7759a2b0fc33545fe70691924a9.jpg", language: "English", genre: "Sci-Fi" },
        { id: 2, title: "The Dark Knight", image: "https://th.bing.com/th/id/OIP.cbVbR-ntIOxkU7IBmM18BAHaLH?pid=ImgDet&w=191&h=286&c=7", language: "English", genre: "Action" },
        { id: 3, title: "Interstellar", image: "https://th.bing.com/th/id/OIP.IuuohBMqKkT8LCNUWL4W3QAAAA?rs=1&pid=ImgDetMain", language: "English", genre: "Sci-Fi" },
        { id: 4, title: "Pulp Fiction", image: "https://th.bing.com/th/id/OIP.DiaUMBtL0X4Lfec8LHrWHgHaPo?rs=1&pid=ImgDetMain", language: "English", genre: "Crime" },
        { id: 5, title: "The Shawshank Redemption", image: "https://th.bing.com/th/id/OIP.wHfHBAdmb1SOoRjSk6MZ-QAAAA?rs=1&pid=ImgDetMain", language: "English", genre: "Drama" },
        { id: 6, title: "Forrest Gump", image: "https://th.bing.com/th/id/OIP.gGyyM3Itlof99LV7HgsYpgHaLH?rs=1&pid=ImgDetMain", language: "English", genre: "Drama" },
        { id: 7, title: "Goodfellas", image: "https://th.bing.com/th/id/OIP.trhrjEKDHe6eMk3MwiJLEQHaKj?rs=1&pid=ImgDetMain", language: "English", genre: "Crime" }
    ];

    const openMovieCard = (movie) => {
        setSelectedMovie(movie);
    };

    const closeMovieCard = () => {
        setSelectedMovie(null);
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundImage: 'url("https://wallpapercave.com/wp/wp5302087.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            fontFamily: 'Arial, sans-serif'
        }}>
            <header style={{ backgroundColor: 'rgba(51, 51, 51, 0.8)', padding: '10px 0', color: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 style={{ margin: 0 }}>MovieTIME</h1>
                    <nav>
                    <Link to="/sign">
                        <button style={{ color: 'white', marginRight: '15px', backgroundColor: 'transparent', border: '1px solid white', padding: '5px 10px', cursor: 'pointer' }}>Sign Up</button>
                    </Link>
                    <Link to="/log">
                        <button style={{ color: 'white', backgroundColor: 'transparent', border: '1px solid white', padding: '5px 10px', cursor: 'pointer' }}>Login</button>
                    </Link>
                    </nav>
                </div>
            </header>

            <main style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px', borderRadius: '8px' }}>
                <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Now Showing</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {movies.map(movie => (
                        <div key={movie.id} style={{ width: 'calc(25% - 15px)', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                            <img src={movie.image} alt={movie.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            <div style={{ padding: '15px' }}>
                                <h3 style={{ margin: '0 0 10px 0' }}>{movie.title}</h3>
                                <p style={{ margin: '0 0 10px 0' }}>Language: {movie.language}</p>
                                <p style={{ margin: '0 0 10px 0' }}>Genre: {movie.genre}</p>
                                <button 
                                    onClick={() => openMovieCard(movie)}
                                    style={{
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 15px',
                                        borderRadius: '5px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Book Tickets
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {selectedMovie && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        maxWidth: '400px',
                        width: '100%'
                    }}>
                        <h2>{selectedMovie.title}</h2>
                        <p>Available Seats:</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {availableSeats.map(seat => (
                                <button 
                                    key={seat}
                                    style={{
                                        padding: '10px',
                                        border: '1px solid #007bff',
                                        borderRadius: '5px',
                                        backgroundColor: 'white',
                                        color: '#007bff',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Seat {seat}
                                </button>
                            ))}
                        </div>
                        <button 
                            onClick={closeMovieCard}
                            style={{
                                marginTop: '20px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                padding: '10px 15px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MovieHomepage;

    
    // function MovieHomepage() {
    //     const movies = [
    //         { id: 1, title: "Inception", image: "https://i.pinimg.com/originals/89/cd/d7/89cdd7759a2b0fc33545fe70691924a9.jpg", language: "English", genre: "Sci-Fi" },
    //         { id: 2, title: "The Dark Knight", image: "https://th.bing.com/th/id/OIP.cbVbR-ntIOxkU7IBmM18BAHaLH?pid=ImgDet&w=191&h=286&c=7", language: "English", genre: "Action" },
    //         { id: 3, title: "Interstellar", image: "https://th.bing.com/th/id/OIP.IuuohBMqKkT8LCNUWL4W3QAAAA?rs=1&pid=ImgDetMain", language: "English", genre: "Sci-Fi" },
    //         { id: 4, title: "Pulp Fiction", image: "https://th.bing.com/th/id/OIP.DiaUMBtL0X4Lfec8LHrWHgHaPo?rs=1&pid=ImgDetMain", language: "English", genre: "Crime" },
    //         { id: 5, title: "The Shawshank Redemption", image: "https://th.bing.com/th/id/OIP.wHfHBAdmb1SOoRjSk6MZ-QAAAA?rs=1&pid=ImgDetMain", language: "English", genre: "Drama" },
    //         { id: 6, title: "Forrest Gump", image: "https://th.bing.com/th/id/OIP.gGyyM3Itlof99LV7HgsYpgHaLH?rs=1&pid=ImgDetMain", language: "English", genre: "Drama" },
    //         { id: 7, title: "Goodfellas", image: "https://th.bing.com/th/id/OIP.trhrjEKDHe6eMk3MwiJLEQHaKj?rs=1&pid=ImgDetMain", language: "English", genre: "Crime" }
    //     ];
      
    //     return (
    //         <div style={{
    //             minHeight: '100vh',
    //             backgroundImage: 'url("https://wallpapercave.com/wp/wp5302087.jpg")',
    //             backgroundSize: 'cover',
    //             backgroundPosition: 'center',
    //             backgroundAttachment: 'fixed',
    //             fontFamily: 'Arial, sans-serif'
    //         }}>
    //             <header style={{ backgroundColor: 'rgba(51, 51, 51, 0.8)', padding: '10px 0', color: 'white' }}>
    //                 <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    //                     <h1 style={{ margin: 0 }}>MovieTIME</h1>
    //                     <nav>
    //                     <Link to="/sign">
    //                         <button style={{ color: 'white', marginRight: '15px', backgroundColor: 'transparent', border: '1px solid white', padding: '5px 10px', cursor: 'pointer' }}>Sign Up</button>
    //                     </Link>
    //                     <Link to="/log">
    //                         <button style={{ color: 'white', backgroundColor: 'transparent', border: '1px solid white', padding: '5px 10px', cursor: 'pointer' }}>Login</button>
    //                     </Link>
    //                     </nav>
    //                 </div>
    //             </header>
      
    //             <main style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px', borderRadius: '8px' }}>
    //                 <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Now Showing</h2>
    //                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
    //                     {movies.map(movie => (
    //                         <div key={movie.id} style={{ width: 'calc(25% - 15px)', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
    //                             <img src={movie.image} alt={movie.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
    //                             <div style={{ padding: '15px' }}>
    //                                 <h3 style={{ margin: '0 0 10px 0' }}>{movie.title}</h3>
    //                                 <p style={{ margin: '5px 0' }}>Language: {movie.language}</p>
    //                                 <p style={{ margin: '5px 0' }}>Genre: {movie.genre}</p>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </main>
    //         </div>
    //     );
    // }
    
    // export default MovieHomepage;
    
