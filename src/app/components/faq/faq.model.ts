export interface Faq{
  id?:number
  data_hora:string
  texto:string
  produto:{
    id?:number
    nome:string
    imgUrl:string
  }
}
