function Orderly(props) {
    let value = props.value;
    let suffix = checkSuffix(value);

    // st
    // 1
    // nd
    // 2
    // rd
    // 3
    // th
    // 4, 5, 6, 7, 8, 9, 10, 11, 12 -> 20
    function checkSuffix(number) {
        let suffix = "";
        switch (number) {
            case 1:
                suffix = "st"
                break;
            case 2:
                suffix = "nd"
                break;
            case 3:
                suffix = "rd"
                break;
            default:
                suffix = "th";
                break;
        }
        return suffix;
    }

    return (
        <span>{value}{suffix}</span>
    )
}
export default Orderly;