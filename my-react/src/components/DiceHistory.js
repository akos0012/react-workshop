export default function DiceHistory({rolls}){
    return(
        <ul>    
            {rolls.map((num,i) => <li key={i}>{num}</li>)}
        </ul>
    );
}