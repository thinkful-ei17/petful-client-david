import React from 'react';

const Pet = props => {
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
          <button onClick={props.onAdoptPet}>Adapt</button>
        </main>
      </section>
    </div>
  );
};

export default Pet;