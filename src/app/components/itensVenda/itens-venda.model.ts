import { Fornecedor } from "../fornecedor/fornecedor.model";
import { Marca } from "../marca/marca.model";
import { Produto } from "../produto/produto.model";
import { Venda } from "../venda/venda.model";

export interface ItensVenda {
  id?: number
  quantidade: number
  valorUnitario: number
  produto: Produto
  venda: Venda
}
