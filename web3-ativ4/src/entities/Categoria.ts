import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import Produto from './Produto'
import sequelize from '../db/db'

class Categoria extends Model<InferAttributes<Categoria>, InferCreationAttributes<Categoria>> {
    declare id: number;
    declare nome: string;
    declare descricao: string | null;
}

Categoria.init({
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
  }, {
    sequelize
  })

Categoria.hasMany(
    Produto,
    {
        foreignKey: {
            name: 'id_categoria',
            allowNull: false
        }
    }
)

export default Categoria