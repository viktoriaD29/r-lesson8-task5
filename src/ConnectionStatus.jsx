import React from 'react';

//algo:
//1. state містить online (true за замовчуваннм) , offline +++
//2. в методі componentDidMount() відловлюємо зміну статусу (вішаємо два обробники подій на window -online, offline) +++
//3. відписуємось від події перед тим як компонента видалиться за допомогою методу componentWillUnmount() +++
//4. у функції onOffline додаємо клас до діва .status__offline +++
//5. у функції onOnline видаляємо клас .status__offline +++

class ConnectionStatus extends React.Component {

  componentDidMount() {
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }

  onOnline = () => {
    document.querySelector('.status').classList.removeClass('status_offline');
  }

  onOffline = () => {
    document.querySelector('.status').classList.add('status_offline');
  }

  render() {
    return <div className="status">Offline</div>;
  }
}

export default ConnectionStatus;
