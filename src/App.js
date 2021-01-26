import React from 'react';
import './styles.css';
import Avatar from './avatar.jpg';
import InfiniteScroll from 'react-infinite-scroller';
import { generateRandomData } from './helpers';
//import { Form } from "react-bootstrap";

const App = () => {
  const [contacts, setContacts] = React.useState([
    { "id": 1, "photo": Avatar, "name": "Tamma Everill" },
    { "id": 2, "photo": Avatar, "name": "Alejandrina Alexis" },
    { "id": 3, "photo": Avatar, "name": "Hakim Bruntjen" },
    { "id": 4, "photo": Avatar, "name": "Prudi Dagwell", },
    { "id": 5, "photo": Avatar, "name": "Prent Frizell", },
    { "id": 6, "photo": Avatar, "name": "Curtis Enterlein" },
    { "id": 7, "photo": Avatar, "name": "Margret Brissard"},
  ]);

  const fetchMoreData = () => {
    const newData = [...contacts, ...generateRandomData(5)];
    setTimeout(() => {
      setContacts(newData);
    }, 2000);
  }

  return (
    <div className="container">
      <h1 className="title">Pokedex</h1>
      <InfiniteScroll
        initialLoad={false}
        loadMore={fetchMoreData}
        hasMore={true}
        loader={(
          <h1 className="loading">Loading...</h1>
        )}
      >
        {contacts.map(({ id, photo, name }) => (
          //<Form>       
          //<Form.Group controlId="exampleForm.ControlSelect2">
          //<Form.Label>Example multiple select</Form.Label>
          <div className="contact-container" key={id}>
            <img src={photo} alt={name} className="avatar" />
            <div className="text-container">
              <h5 className="name">{name}</h5>
            </div>
          </div>
          //</InfiniteScroll></Form.Group>
          //</Form>
        ))}</InfiniteScroll>
    </div>
  )
}

export default App;