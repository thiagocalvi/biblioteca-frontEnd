import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import api from "../../../config"
import "../../App.css"

export function Home(){
    
    const [numBook, setNumBook] = useState(0);

    const getAllBooks = async ()=>{
        await axios.get(api + "/countBooks")
            .then(response => {
                console.log(response.data.count)
               setNumBook(response.data.count) 
            })
    }
    
    useEffect(()=>{
        getAllBooks();
    }, [])


    return(
        <div className="container">
            <Row>
                <Col sm="6">
                    <Card body>
                    <CardTitle tag="h5">
                        Livros Cadastrados
                    </CardTitle>
                    <CardText>
                        {numBook}
                    </CardText>
                    <Button>
                        <Link className="link" to={'/books'}>
                            Ver Livros
                        </Link>
                    </Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                    <CardTitle tag="h5">
                        Leitores Cadastrados
                    </CardTitle>
                    <CardText>
                        Sem leitores no momento
                    </CardText>
                    <Button>
                        <Link className="link" to={'#'}>
                            Ver Leitores
                        </Link>
                    </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}