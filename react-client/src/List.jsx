import React from 'react';
import ListItem from './ListItem.jsx';


const List = ({ robots }) => (
<div>
    {robots.map(robot => <ListItem robot={robot} key={robot.name}/>)}
</div>
)

export default List;