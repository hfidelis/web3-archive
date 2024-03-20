import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import ItensPedido from './ItensPedido'
import sequelize from '../db/db'

class Produto extends Model<InferAttributes<Produto>, InferCreationAttributes<Produto>> {
    declare id: number;
    declare nome: string;
    declare descricao: string | null;
    declare preco: number;
    declare disponivel: boolean;
}

Produto.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    disponivel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
  }, {
    sequelize
  })

Produto.hasMany(
  ItensPedido,
  {
      foreignKey: {
          name: 'id_produto',
          allowNull: false
      }
  }
)

export default Produto