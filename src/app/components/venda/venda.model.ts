export interface Venda {
  id?: number
  dataHora: string
  valorTotal: number
  cliente: {
    id?: number
    nome: string
    nomeSocial:string
    apelido:string
    dataNascimento: string,
    sexo: string,
    cpf: string,
    email: string,
    telefone: string
  }
  formaPagamento: {
    id?: number
    ativo:boolean
    forma: string
    descricao: string
  }
}
