import "./Tour.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Tour(props) {
    return (
        <>
            <Card key={props.tourObj.id} style={{ width: '18rem' }}>
                <Card.Img alt={props.tourObj.name} variant="top" src={props.tourObj.image} />
                <Card.Body>
                    <Card.Title>{props.tourObj.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Link to={`/city/${props.tourObj.id}`} style={{ textDecoration: 'none' }}>
                        <Button variant="primary">Tour Details</Button>
                    </Link>
                </Card.Body>
            </Card >
        </>
    )
}
export default Tour