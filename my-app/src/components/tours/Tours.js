import "./Tours.css"
import ToursData from"../../data/db.json"
import Tour from "./tour/Tour"

function Tours(props) {
    return (
        <div className="d-flex justify-content-lg-around flex-wrap">
        {
            ToursData.map(Element => {
                return (
                    <>
                    <Tour tourObj={Element} />
                    </>
                )
            })
        }
        </div>
    )
}
export default Tours