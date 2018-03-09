import React from 'react';
import Pet from './Pet';

const Dashboard = props => {
  return (
    <div className='dashboard'>
      <Pet petToAdopt={props.catToAdopt} onAdoptPet={() => console.log('hello')} />
      <Pet petToAdopt={props.dogToAdopt} onAdoptPet={() => console.log('hello')} />
    </div>
  );
};

export default Dashboard;