import Header from '../Header/Header';
import Notification from '../Notification/Notification';
import data from './data';
import './App.css';
import { useState } from 'react';

function App() {
  const [informations,setInformations] = useState(data);

  function markAllAsRead() {
    setInformations(informations.map((properties) => {
      let newProperties = properties;
      newProperties.isNew = false;
      return newProperties
    }));
  };

  return (
    <main className='notifications-page-main'>
      <Header
      newNotificationsNumber={informations.filter(properties => properties.isNew).length}
      onClickMarkAllAsRead={markAllAsRead}
      />

      <section className='notifications-space'>
        {informations.map(properties => <Notification key={properties.id.toString()} {...properties} />)}
      </section>
    </main>
  );
}

export default App;
