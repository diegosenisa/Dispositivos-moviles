import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Favorites = ({ location }) => {
  const favorites = location.state ? location.state.favorites : [];
  const history = useHistory();

  const handleReturnToHome = () => {
    history.push('/home');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>List of Favorite Books:</h2>
        <ul>
          {favorites.map((book) => (
            <li key={book.ID}>
              {book.title} - {book.author}
            </li>
          ))}
        </ul>
        <IonButton onClick={handleReturnToHome}>Back to Home</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
