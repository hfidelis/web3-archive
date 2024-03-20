-- Tabela para armazenar informações sobre as categorias dos produtos
CREATE TABLE Categorias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    description TEXT
);

-- Tabela para armazenar informações sobre os produtos
CREATE TABLE Produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    category_id INT,
    avaliable BOOLEAN,
    FOREIGN KEY (category_id) REFERENCES Categorias(id)
);

-- Tabela para armazenar informações sobre os clientes
CREATE TABLE Clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    address VARCHAR(255),
    phone VARCHAR(20)
);

-- Tabela para armazenar informações sobre os pedidos
CREATE TABLE Pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT,
    order_date DATE,
    status VARCHAR(50),
    FOREIGN KEY (client_id) REFERENCES Clientes(id)
);

-- Tabela para armazenar informações sobre os itens de pedido
CREATE TABLE ItensPedido (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    quantity INT,
    unitary_price DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES Pedidos(id),
    FOREIGN KEY (product_id) REFERENCES Produtos(id)
);
