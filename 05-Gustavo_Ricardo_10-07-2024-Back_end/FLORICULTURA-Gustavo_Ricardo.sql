create database floricultura;
  -- rop database floricultura;
use floricultura;

create table Clientes(
	rg int primary key not null,
    nome varchar(100),
    telefone varchar(20),
    endereco text

);

create table Produtos(
	id_produto int primary key not null,
    nome_produto varchar(100),
    tipo varchar(50),
    preco float,
    quantidade int
);







create table Compras(
	id_compra int primary key not null,
    telefone char(14),
    data_compra date,
    valor_total float,
    rg_cliente int not null,
    produto_id int not null,
    foreign key (rg_cliente) references Clientes(rg),
    foreign key (produto_id) references Produtos(id_produto)
    

);

INSERT INTO Clientes (rg, nome, telefone, endereco) VALUES
(1234567, 'João Silva', '(11) 98765-4321', 'Rua das Flores, 123 - São Paulo, SP'),
(2345678, 'Maria Souza', '(21) 99999-8888', 'Avenida das Rosas, 456 - Rio de Janeiro, RJ'),
(3456789, 'Pedro Santos', '(51) 12345-6789', 'Travessa das Orquídeas, 789 - Porto Alegre, RS');

INSERT INTO Produtos (id_produto, nome_produto, tipo, preco, quantidade) VALUES
(1, 'Rosas Vermelhas', 'Flor', 12.50, 50),
(2, 'Orquídea Branca', 'Flor', 25.00, 30),
(3, 'Vaso de Suculentas', 'Decoração', 35.00, 20),
(4, 'Buquê de Lírios', 'Flor', 40.00, 40),
(5, 'Cacto Decorativo', 'Decoração', 18.00, 15);

-- Exemplo de compra do cliente João Silva
INSERT INTO Compras (id_compra, telefone, data_compra, valor_total, rg_cliente, produto_id) VALUES
(1, '(11)98765-4321', '2024-07-10', 62.50, 1234567, 1), -- Compra de Rosas Vermelhas
(2, '(11)98765-4321', '2024-07-10', 70.00, 1234567, 3); -- Compra de Vaso de Suculentas

-- Exemplo de compra do cliente Maria Souza
INSERT INTO Compras (id_compra, telefone, data_compra, valor_total, rg_cliente, produto_id) VALUES
(3, '(21)99999-8888', '2024-07-09', 50.00, 2345678, 2), -- Compra de Orquídea Branca
(4, '(21)99999-8888', '2024-07-10', 72.00, 2345678, 4); -- Compra de Buquê de Lírios

-- Exemplo de compra do cliente Pedro Santos
INSERT INTO Compras (id_compra, telefone, data_compra, valor_total, rg_cliente, produto_id) VALUES
(5, '(51)12345-6789', '2024-07-08', 90.00, 3456789, 4), -- Compra de Buquê de Lírios
(6, '(51)12345-6789', '2024-07-10', 37.50, 3456789, 1); -- Compra de Rosas Vermelhas

-- Visualizando toda a tabela de clientes. 
select*from Clientes;
-- Visualizando toda a tabela de compras.
select*from Compras;

-- Visualizando todas as compras referentes a os rgs dos clientes;
select clientes.*,compras.* from Clientes Inner join compras on clientes.rg where compras.rg_cliente= clientes.rg;

-- VIsualizando o total das compras de Pedro Santos
SELECT rg_cliente, nome, SUM(valor_total) AS total_compras
FROM Compras
    INNER JOIN Clientes ON Compras.rg_cliente = Clientes.rg
WHERE rg_cliente = 3456789; 

-- Visualizando o total das compras de Maria Souza
SELECT rg_cliente, nome, SUM(valor_total) AS total_compras
FROM Compras
    INNER JOIN Clientes ON Compras.rg_cliente = Clientes.rg
WHERE rg_cliente = 2345678; 



-- Visualizando o total das compras de João Silva
SELECT rg_cliente, nome, SUM(valor_total) AS total_compras
FROM Compras
    INNER JOIN Clientes ON Compras.rg_cliente = Clientes.rg
WHERE rg_cliente = 1234567; 

