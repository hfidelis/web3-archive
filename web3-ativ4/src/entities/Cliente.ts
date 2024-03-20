import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import Pedido from './Pedido'
import sequelize from '../db/db'

class Cliente extends Model<InferAttributes<Cliente>, InferCreationAttributes<Cliente>> {
    declare id: number;
    declare nome: string;
    declare email: string;
    declare endereco: string | null;
    declare telefone: string | null;
}

Cliente.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    endereco: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    telefone: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
  }, {
    sequelize
  })

Cliente.hasMany(
  Pedido,
  {
      foreignKey: {
          name: 'id_cliente',
          allowNull: false
      }
  }
)

export default Cliente