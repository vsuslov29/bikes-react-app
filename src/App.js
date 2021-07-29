import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import localforage from 'localforage';
import Content from './components/Content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bikes: [],
    }
    this.handleStatus = this.handleStatus.bind(this);
    this.deleteBike = this.deleteBike.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  handleStatus(e, id) {
    const value = e.target.value;

    this.setState(prevState => ({
      bikes: prevState.bikes.map((bike, index) => id == index ?
        { ...bike, status: value } : bike)
    }))
  }

  deleteBike(id) {
    this.setState(prevState => ({
      bikes: prevState.bikes.filter((bike, index) => id != index)
    }))
  }

  onFormSubmit(data) {
    let newBike = {
      id: data.id,
      name: data.name,
      type: data.type,
      color: data.color,
      wheelSize: data.wheelSize,
      price: data.price,
      description: data.description,
      status: 'available'
    }

    this.setState(prevState => ({
      bikes: [
        ...prevState.bikes,
        { ...newBike }
      ]
    }))
  }

componentWillMount() {
  localforage.getItem('bikes')
    .then(bikes => {
      bikes && this.setState({
        bikes: bikes,
      })
    })
}

componentDidMount() {
  localforage.getItem('bikes')
    .then(bikes => {
      if (!bikes) {
        let bikes = [
          { id: 6653465734543, name: 'Blue Horse', type: 'Mountain', color: 'red', status: 'available', wheelSize: 23, price: '25.00', description: 'I have two wheels' },
          { id: 7885624545767, name: 'Black Demon', type: 'Road', color: 'green', status: 'available', wheelSize: 22, price: '27.00', description: 'I have two wheels' },
          { id: 6546456456786, name: 'Night Fury', type: 'Cyclocross', color: 'yellow', status: 'busy', wheelSize: 25, price: '29.00', description: 'I have two wheels' },
          { id: 8682342233422, name: 'Blue Hawk', type: 'Folding', color: 'white', status: 'busy', wheelSize: 21, price: '31.00', description: 'I have two wheels' },
          { id: 3845985665888, name: 'Black Bird', type: 'Touring', color: 'black', status: 'unavailable', wheelSize: 20, price: '33.00', description: 'I have two wheels' },
        ];

        this.setState({
          bikes: bikes,
        })
      } else {
        this.setState({ bikes: bikes })
      }
    })
}

componentWillUpdate(nextProps, nextState) {
  localforage.setItem('bikes', nextState.bikes);
}

render() {
  return (
    <div className="App">
      <Header />
      <Content
        bikes={this.state.bikes}
        handleStatus={this.handleStatus}
        deleteBike={this.deleteBike}
        onFormSubmit={this.onFormSubmit}
      />
      <Footer />
    </div>
  );
}
}

export default App;
