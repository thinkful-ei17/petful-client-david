import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import Pet from './Pet';
import {fetchCat, adoptCat} from '../actions/cat';
import {fetchDog, adoptDog} from '../actions/dog';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  render() {
    if (this.props.catLoading || this.props.dogLoading) {
      return <Spinner name="circle" fadeIn='none' />;
    }
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
  dogToAdopt: state.dogReducer.data,
  catLoading: state.catReducer.loading,
  dogLoading: state.dogReducer.loading
});

export default connect(mapStateToProps)(Dashboard);