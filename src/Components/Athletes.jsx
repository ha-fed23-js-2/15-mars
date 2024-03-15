import Athlete from "./Athlete";

// 5a Skapa en komponent som kan visa data om idrottare. Informationen ska visas i en tabell. Du kan använda <table> eller en <section> med display: grid.

// Här är exempeldata (AI-genererat, kan innehålla hallucinationer)
const athletes = [
    { id: 1, name: "Sarah Sjöström", age: 28, sport: "Simning", hometown: "Stockholm" },
    { id: 2, name: "Zlatan Ibrahimović", age: 40, sport: "Fotboll", hometown: "Malmö" },
    { id: 3, name: "Therese Johaug", age: 33, sport: "Längdskidåkning", hometown: "Oslo" },
    { id: 4, name: "Stina Nilsson", age: 28, sport: "Skidskytte", hometown: "Malung" },
    { id: 5, name: "Henrik Stenson", age: 45, sport: "Golf", hometown: "Göteborg" },
    { id: 6, name: "Armand Duplantis", age: 22, sport: "Stavhopp", hometown: "Lafayette, USA" },
    { id: 7, name: "Jenny Rissveds", age: 27, sport: "Mountainbike", hometown: "Falun" },
    { id: 8, name: "Charlotte Kalla", age: 35, sport: "Längdskidåkning", hometown: "Tärendö" },
    { id: 9, name: "Jonas Jerebko", age: 35, sport: "Basket", hometown: "Kinna" },
    { id: 10, name: "Tove Alexandersson", age: 29, sport: "Orientering", hometown: "Karlskoga" }
]

// 5b Lyft ut koden som visar varje rad i tabellen i en egen komponent. Använd props för att skicka datan.

// steg 1:
// mappa över atleterna
// steg 2:
// skicka in atleten i en ny komponent

const Athletes = () => {
    return (
        <article>
            {
                athletes.map((athlete, i) => <Athlete athleteData={athlete} key={i} />)
            }
        </article>
    )
}
export default Athletes;