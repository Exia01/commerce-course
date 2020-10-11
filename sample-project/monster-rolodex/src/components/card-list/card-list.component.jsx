import React from 'react';
import Card from '../card/card.component';

import './card-list.styles.css';

export default function CardList(props) {
  const monsters = [...props.monsters];
  let monsterTags;
  if (monsters.length > 0) {
    monsterTags = monsters.map((singleMonster) => {
      return <Card key={singleMonster.id} monster={singleMonster} />;
    });
  }

  return <div className='card-list'>{monsters && monsterTags}</div>;
}
