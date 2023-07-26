import React from 'react';
import { IonCard, IonCardContent, IonButton, IonThumbnail } from '@ionic/react';

const BookDetails = ({ selectedBook, addToFavorites, removeFromFavorites }) => {
  return (
    <>
      {selectedBook && (
        <IonCard>
          <IonCardContent>
            <IonThumbnail>
              <img src={selectedBook.image_url} alt={selectedBook.title} />
            </IonThumbnail>
            <h2>{selectedBook.title}</h2>
            <p>{selectedBook.author}</p>
            <p>{selectedBook.description}</p>
            {selectedBook.link && <IonButton href={selectedBook.link} target="_blank" rel="noopener noreferrer">More Info</IonButton>}
            {selectedBook.isFavorite ? (
              <IonButton onClick={() => removeFromFavorites(selectedBook)}>Remove from Favorites</IonButton>
            ) : (
              <IonButton onClick={() => addToFavorites(selectedBook)}>Add to Favorites</IonButton>
            )}
          </IonCardContent>
        </IonCard>
      )}
    </>
  );
};

export default BookDetails;
