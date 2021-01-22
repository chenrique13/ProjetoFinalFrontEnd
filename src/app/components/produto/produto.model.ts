import { Categoria } from "../categoria/categoria.model";
import { Fornecedor } from "../fornecedor/fornecedor.model";
import { Marca } from "../marca/marca.model";

export interface Produto{
    id?:number
    nome:string
    descricao:string
    imgUrl:string
    preco:number
    unidade:number
    categoria:Categoria
    marca: Marca
    fornecedor: Fornecedor
}
