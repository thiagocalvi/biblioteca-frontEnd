import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import api from '../../config';

export function ModalSearch(){

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    const getValue = (e) =>{
        setTermo(e.target.value)
    }
    
    const [data, setData] = useState([]);
    const [termo, setTermo] = useState("")

    const searchBook = async () => {
        await axios.get(api + "/search/" + termo).then(books => {
            setData(books.data)
            console.log(data)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    useEffect(()=>{    
        searchBook();
    },[termo])



    return(
        <div>
             <Button color="info" onClick={toggle}>
                Pesquisar
            </Button>
            <Modal isOpen={modal} size='lg' toggle={toggle} scrollable='true'>
                <ModalHeader toggle={toggle}>
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={getValue}/>
                </ModalHeader>
                <ModalBody>
                 teste
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        Fechar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}