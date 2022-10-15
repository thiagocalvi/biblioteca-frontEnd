import axios from "axios";
import { useEffect, useState } from "react"
import { Alert } from "reactstrap";
import api from "../../../config";

export function ListarBooks(){

    const [data, setData] = useState([]);


    const getBooks = async ()=>{
        await axios.get(api + '/books')
            .then(response => {
                // console.log(response.data)
                setData(response.data)
            })
    }

    const delBook = async (e) => {
        // await axios.delete(api + "/book/destroy", bookId)
        // .then(res => {
        //     console.log("deletado")
        // }).catch(er => {
        //     console.log(er)
        // })
    }



    useEffect(()=>{
        document.title = "Livros Cadastrados"
        getBooks();
    }, []);

    return(
        <div className="container">
            {/* <Alert color="danger">ds</Alert> */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome Livro</th>
                        <th scope="col">Inicial Livro</th>
                        <th scope="col">Nome Autor</th>
                        <th scope="col">Inicial Autor</th>
                        <th scope="col">N° Exemplar</th>
                        <th scope="col">N° Registro</th>
                        <th scope="col">CDD</th>
                        <th scope="col">Situação</th>
                        <th scope="col" style={{textAlign: "center"}}>Ação</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(book => (
                        <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.book_name}</td>
                                <td>{book.initial_book}</td>
                                <td>{book.author_name}</td>
                                <td>{book.initial_author}</td>
                                <td>{book.ex}</td>
                                <td>{book.reg}</td>
                                <td>{book.cdd}</td>
                                <td>{book.emprestado !== 1?"-----":Emprestado}</td>
                                <td><button>Excluir</button> 
                                    <button>Atualizar</button> 
                                    <button onClick={()=>{axios.put(api + "/emprestimo/" + book.id)}}>Emprestimo</button>
                                </td>
                        </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}