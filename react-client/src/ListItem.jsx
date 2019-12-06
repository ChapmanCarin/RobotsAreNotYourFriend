import React from 'react';


const ListItem = ({ robot }) => {
  console.log(robot);
  return(
    <div>
      <p>name of robot:<b>{robot.model}</b></p>
      <p>how it will kill you:<b>{robot.description}</b></p>
    </div>
  )
};

export default ListItem;
