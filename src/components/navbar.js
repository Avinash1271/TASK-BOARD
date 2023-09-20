import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [randomImageInfo, setRandomImageInfo] = useState(null);
    useEffect(() => {
        // Generating a random number between 0 and 999
        const random = Math.floor(Math.random() * 1000);
        const apiUrl = `https://picsum.photos/id/${random}/info`;
    
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setRandomImageInfo(data);
          })
          .catch((error) => {
            console.error('Error fetching image information:', error);
          });
    }, []);
  return (
    <div>
        <nav className='navbar'>
        <div className='logo-container'>
          <img src='/logo.png' alt='TasksBoard Logo' className='logo-img' />
          <h1>TasksBoard</h1>
        </div>

        <div className='random-image'>
          {randomImageInfo ? (
            <img
              src={randomImageInfo.download_url}
              alt='Profile Icon'
              className='random-image-inner'
            />
          ) : (
            'Loading profile icon...'
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar