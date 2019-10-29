import React, {useEffect, useState} from 'react';
import {getPlayer} from './Player';

 export const Game = (props) => {
    const [player, setPlayer] = useState({});

    useEffect(() => {
        getPlayer().then(player => 
        setPlayer(player))
    }, [getPlayer] );

    console.log("Player is ", player);

    
    return(
        <div>test</div>
    )

}


