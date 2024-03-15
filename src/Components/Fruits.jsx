function Fruits() {
    const fruits = ["Äpple", "Päron", "Citron", "Melon", "Kivi", "Apelsin"];
    return (
        <ul>
            {
                fruits.map((fruit, i) => <li key={i}>{fruit}</li>)
            }
        </ul>
    )
}
export default Fruits;