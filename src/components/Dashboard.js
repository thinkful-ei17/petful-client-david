import React from 'react';
import {connect} from 'react-redux';
import Pet from './Pet';
import {fetchCat} from '../actions/cat';
import {fetchDog} from '../actions/dog';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  render() {
    return (
      <div className='dashboard'>
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={() => console.log('hello')} />
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={() => console.log('hello')} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  catToAdopt: state.catReducer.data,
  dogToAdopt: state.dogReducer.data
});

export default connect(mapStateToProps)(Dashboard);