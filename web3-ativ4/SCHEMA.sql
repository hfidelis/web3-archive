-- Tabela para armazenar informações sobre as categorias dos produtos
CREATE TABLE Categorias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    descricao TEXT
);

-- Tabela para armazenar informações sobre os produtos
CREATE TABLE Produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    descricao TEXT,
    preco DECIMAL(10, 2),
    id_categoria INT,
    disponivel BOOLEAN,
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id)
);

-- Tabela para armazenar informações sobre os clientes
CREATE TABLE Clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
    endereco VARCHAR(255),
    telefone VARCHAR(20)
);

-- Tabela para armazenar informações sobre os pedidos
CREATE TABLE Pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT,
    data_pedido DATE,
    status VARCHAR(50),
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id)
);

-- Tabela para armazenar informações sobre os itens de pedido
CREATE TABLE ItensPedido (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT,
    id_produto INT,
    quantidade INT,
    preco_unitario DECIMAL(10, 2),
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id),
    FOREIGN KEY (id_produto) REFERENCES Produtos(id)
);