import Pedido from "../entities/Pedido"
import Produto from "../entities/Produto"
import Cliente from "../entities/Cliente"
import Categoria from "../entities/Categoria"
import ItensPedido from "../entities/ItensPedido"

const dbInit = () => {
    Categoria.sync()
    Cliente.sync()
    Produto.sync()
    Pedido.sync()
    ItensPedido.sync()
}

export default dbInit