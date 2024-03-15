import "../App.css";
// det vi gjorde nu i props kallas för destructuring
// https://www.tutorialspoint.com/destructuring-of-props-in-reactjs
function Athlete({ athleteData }) {
    return (
        <section className="athlete-container">
            <p>Namn: {athleteData.name}</p>
            <p>Ålder: {athleteData.age}</p>
            <p>Hemort: {athleteData.hometown}</p>
            <p>Sport: {athleteData.sport}</p>
        </section>
    )
}
export default Athlete;