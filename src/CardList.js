import React from 'react';
import Card from './Card';
import Scroll from './Scroll';

const CardList = ({ robots }) => {
    if (true) {
        throw new Error('Nooooo!');
    }
    const CardArray = robots.map((robot, index) => {
        return <Card key={index} id={robot.id} name={robot.name} email={robot.email} />
    });

    return (
        <div>
            <Scroll>
                {CardArray}
            </Scroll>
        </div>
    )
}

export default CardList;