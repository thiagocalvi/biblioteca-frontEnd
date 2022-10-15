import axios from "axios";
import api from "../../config";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState, useEffect } from "react";
import { ModalSearch } from "./ModalSearch";


function Menu(){

    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            <a class="nav-link" href="/books">Livros</a>
                            <a class="nav-link disabled" href="/users">Usuarios</a>
                            <a class="nav-link disabled">Relatorios</a>
                            <Button color="primary" href="/book/new">Cadastrar Livro</Button>                            
                        </div>
                    </div>
                </div>
                <div>
                    <ModalSearch/>
                </div>
            </nav>
        </div>
    ) 
}


export default Menu;








