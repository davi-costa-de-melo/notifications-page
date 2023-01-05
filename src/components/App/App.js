import Header from '../Header/Header';
import Notification from '../Notification/Notification';
import data from './data';
import './App.css';
import { useState } from 'react';

function App() {
  const [informations,setInformations] = useState(data);

  const newNotificationsCount = informations.filter(properties => properties.isNew).length;

  function markAllAsRead() {
    if (newNotificationsCount) {
      setInformations(informations.map(properties => properties.isNew ? Object.assign(properties, {isNew: false}) : properties));
    };
  };

  function markAsRead(id) {
    if (informations[id].isNew) {
      setInformations(informations.map(properties => properties.id === id ? Object.assign(properties, {isNew: false}) : properties));
    };
  };

  return (
    <main className='notifications-page-main'>
      <Header
      newNotificationsNumber={newNotificationsCount ? newNotificationsCount : 0}
      onClickMarkAllAsRead={markAllAsRead}
      />

      <section className='notifications-space'>
        {informations.map(properties => <Notification key={properties.id.toString()} onClickMarkAsRead={() => {markAsRead(properties.id)}} {...properties} />)}
      </section>
    </main>
  );
}

export default App;
