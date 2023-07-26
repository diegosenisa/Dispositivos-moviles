import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import BookSearch from '../components/BookSearch';
import BookList from '../components/BookList';
import BookDetails from '../components/BookDetails';

const Home = () => {
  const [searchType, setSearchType] = useState('book_title');
  const [searchValue, setSearchValue] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (searchValue.trim() !== '') {
      apiRequest();
    } else {
      setBooks([]);
    }
  }, [searchValue, searchType]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const apiRequest = async () => {
    try {
      const response = await fetch(`https://www.etnassoft.com/api/v1/get/?${searchType}=${encodeURIComponent(searchValue)}`);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  }

  const history = useHistory();

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  const removeFromFavorites = (book) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favBook) => favBook.ID !== book.ID));
  };

  const handleViewFavorites = () => {
    history.push({
      pathname: '/favorites',
      state: { favorites },
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Findbook</IonTitle>
          <IonButton onClick={handleViewFavorites}>Ver Favoritos</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <BookSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchType={searchType}
          setSearchType={setSearchType}
        />
        <BookDetails selectedBook={selectedBook} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />
        <BookList books={books} handleBookClick={handleBookClick} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} favorites={favorites} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
