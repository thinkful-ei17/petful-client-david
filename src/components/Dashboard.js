import React from 'react';
import {connect} from 'react-redux';
import Pet from './Pet';
import {fetchCat, adoptCat} from '../actions/cat';
import {fetchDog, adoptDog} from '../actions/dog';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  render() {
    return (
      <div className='dashboard'>
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={() => this.props.dispatch(adoptCat())} />
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={() => this.props.dispatch(adoptDog())} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  catToAdopt: state.catReducer.data,
  dogToAdopt: state.dogReducer.data
});

export default connect(mapStateToProps)(Dashboard);