function DiceRoller(props){
    const {onRoll} = props;

    function handleClick(){
        const nextRoll = Math.ceil(Math.random() * 6);
        onRoll(nextRoll);   
    }

    return (
        <button onClick={handleClick}>Roll</button>
    );
}

export default DiceRoller;