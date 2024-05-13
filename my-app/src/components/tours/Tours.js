import "./Tours.css"
import ToursData from"../../data/db.json"

function Tours(props) {
    return (
        <>
        {
            ToursData.map(Tour => {
                return (
                    <>
                    <div class="line">
                        <p>{Tour.name}</p>
                        <img class="cardImage" alt="tour" src={Tour.image}/>
                    </div>
                    </>
                )
            })
        }
        </>
    )
}
export default Tours