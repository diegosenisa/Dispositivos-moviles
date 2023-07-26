import React from 'react';
import { IonList, IonItem, IonLabel, IonButton, IonThumbnail } from '@ionic/react';

const BookList = ({ books, handleBookClick, addToFavorites, removeFromFavorites, favorites }) => {
  return (
    <IonList>
      {books.map((book) => (
        <IonItem key={book.ID}>
          <IonThumbnail slot="start">
            <img src={book.image_url} alt={book.title} />
          </IonThumbnail>
          <IonLabel onClick={() => handleBookClick(book)}>{book.title}</IonLabel>
          {favorites.some((favBook) => favBook.ID === book.ID) ? (
            <IonButton onClick={() => removeFromFavorites(book)}>Remove from Favorites</IonButton>
          ) : (
            <IonButton onClick={() => addToFavorites(book)}>Add to Favorites</IonButton>
          )}
        </IonItem>
      ))}
    </IonList>
  );
};

export default BookList;
