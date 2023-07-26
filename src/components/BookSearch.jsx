import React from 'react';
import { IonSearchbar, IonItem, IonSelect, IonSelectOption } from '@ionic/react';

const BookSearch = ({ searchValue, setSearchValue, searchType, setSearchType }) => {
    return (
        <>
            <IonSearchbar value={searchValue} onIonChange={(e) => setSearchValue(e.detail.value)} />
            <IonItem>
                <IonSelect label='Tipo de busqueda' value={searchType} onIonChange={(e) => setSearchType(e.detail.value)}>
                    <IonSelectOption value="category">Categoria</IonSelectOption>
                    <IonSelectOption value="book_title">Titulo</IonSelectOption>
                    <IonSelectOption value="book_author">Autor</IonSelectOption>
                    <IonSelectOption value="publisher">Editorial</IonSelectOption>
                    <IonSelectOption value="publisher_date">Fecha de publiacion</IonSelectOption>
                    <IonSelectOption value="keyword">Palabra clave</IonSelectOption>
                    <IonSelectOption value="any_tags">Etiquetas</IonSelectOption>
                </IonSelect>
            </IonItem>
        </>
    );
};

export default BookSearch;