import React from 'react';

//algo:
//1. state містить online (true за замовчуваннм) , offline +++
//2. в методі componentDidMount() відловлюємо зміну статусу (вішаємо два обробники подій на window -online, offline) +++
//3. відписуємось від події перед тим як компонента видалиться за допомогою методу componentWillUnmount() +++
//4. відмалювуємо дів в залежності від статусу

//в реакті ми не можемо мотифікувати ДОМ, це груба помилка, бо цим займається сам реакт, треба логіку додавання і видалення класу робити в методі render

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: true
    };
    
  }

  componentDidMount() {
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }

  onOnline = () => {
    this.setState({
      status: true
    });
  };

  onOffline = () => {
    this.setState({
      status: false
    });
  };

  render() {
    if (this.state.status) {
      return <div className="status">online</div>
    }
    return <div className="status status_offline">offline</div>;
  }

  // state = {
  //   online: true,
  //   offline: false,
  // };

  // componentDidMount() {
  //   window.addEventListener('online', this.onOnline);
  //   window.addEventListener('offline', this.onOffline);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('online', this.onOnline);
  //   window.removeEventListener('offline', this.onOffline);
  // }

  // onOnline = () => {
  //   this.setState({
  //     online: true,
  //     offline: false,
  //   });

  //   document.querySelector('.status').classList.remove('status_offline');
  // };

  // onOffline = () => {
  //   this.setState({
  //     online: false,
  //     offline: true,
  //   });

  //   document.querySelector('.status').classList.add('status_offline');
  // };

  // render() {
  //   return (
  //     <div className="status">{this.state.online ? 'online' : 'offline'}</div>
  //   );
  // }
}

export default ConnectionStatus;
