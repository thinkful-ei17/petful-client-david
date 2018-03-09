import React from 'react';
import Spinner from 'react-spinkit';

const Pet = props => {
  if (props.petToAdopt) {
    return (
      <div className='pet'>
        <section>
          <header>
            {props.petToAdopt.name}
            <img src={props.petToAdopt.imageURL} alt={props.petToAdopt.imageDescription} />
          </header>
          <main>
            <dl>
              <dt>Sex:</dt>
              <dd>{props.petToAdopt.sex}</dd>
              <dt>Age:</dt>
              <dd>{props.petToAdopt.age}</dd>
              <dt>Breed:</dt>
              <dd>{props.petToAdopt.breed}</dd>
              <dt>Story:</dt>
              <dd>{props.petToAdopt.story}</dd>
            </dl>
            <button onClick={props.onAdoptPet}>Adopt</button>
          </main>
        </section>
      </div>
    );
  }
  else {
    return( 
      <div>
        <Spinner name='circle' fadeIn='none' />
      </div>
    );
  }
};

export default Pet;