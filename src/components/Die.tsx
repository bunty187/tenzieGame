import React from 'react'

interface Props {
    value: number,
    isHeld: boolean,
    holdDice: () => void;
}

const Die: React.FC<Props> = (props) => {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div className='dice-face'
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className='dice-num'>{props.value}</h2>
        </div>
    )
}

export default Die

