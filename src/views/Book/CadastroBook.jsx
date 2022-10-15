import axios from "axios";
import api from "../../../config";
import { useState } from "react";

export function CadastroBook(){
    
    const [book, setBook] = useState({
        book_name: '',
        author_name: '',
        initial_name: '',
        initial_author: '',
        cdd: '',
        ex: '',
        reg: '',  
    });

    const valorInput = e => setBook({...book, [e.target.name]: e.target.value});

    const cadBook = async (e)=>{
        e.preventDefault();

        const headers = {
          'Content-Type': 'application/json'
        }

        await axios.post(api + '/book/save', book, {headers})
            .then(()=>{
                console.log('Livro Cadastrado: '+ book);

            }), (err => {
                console.error(err);
            })
    };

    
    return(
        <div>
            <div className="container" id='formCadastro' onSubmit={cadBook}>
                <h1 className='titleForm'>Cadastro de Livros</h1>
                <form class="row g-3" autocomplete="off">
                    
                    <div class="col-md-6">
                        <label for="inputNameBook" class="form-label">Nome do Livro</label>
                        <input type="text" class="form-control" id="inputNameBook" name='book_name' onChange={valorInput}/>
                    </div>
            
                    <div class="col-md-2">
                        <label for="inputInitialBook" class="form-label">Inicial do Livro</label>
                        <input type="text" class="form-control" id="inputInitialBook" name='initial_book' onChange={valorInput}/>
                    </div>
            
                    <div class="col-md-6">
                        <label for="inputNameAuthor" class="form-label">Nome do Autor(a)</label>
                        <input type="text" class="form-control" id="inputNameAuthor" name='author_name' onChange={valorInput}/>
                    </div>
            
                    <div class="col-md-2">
                        <label for="inputInitialAuthor" class="form-label">Inicial do Autor</label>
                        <input type="text" class="form-control" id="inputInitialAuthor" name='initial_author' onChange={valorInput}/>
                    </div>
            
                    <div class="col-md-5">
                        <label for="inputCdd" class="form-label">CDD do Livro</label>
                        <input type="number" class="form-control" id="inputCdd" name='cdd' onChange={valorInput}/>
                    </div>
            
                    <div class="col-md-3">
                        <label for="inputExemplar" class="form-label">Numero do Exemplar</label>
                        <input type="number" class="form-control" id="inputExemplar" name='ex' onChange={valorInput}/>
                    </div>
            
                    <div class="col-md-3">
                        <label for="inputReg" class="form-label">Registro do Livro</label>
                        <input type="text" class="form-control" id="inputReg" name='reg' onChange={valorInput}/>
                    </div>
                
                    <div class="col-12">
                        <button type="submit" class="btn btn-success">Cadastrar</button>
                        {" "}
                        <button type="reset" class="btn btn-info">Limpar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}