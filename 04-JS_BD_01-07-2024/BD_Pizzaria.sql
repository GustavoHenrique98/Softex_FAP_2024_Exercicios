create database pizzaria;
use pizzaria;
 drop database pizzaria;

create table Cliente(
	id_cliente int primary key not null,
    nome varchar(30),
    telefone char(15),
    endereco text
);

Create table Pedido(
	id_pedido int primary key not null,
    cliente_id int not null,
    data date,
    total float,
    foreign key(cliente_id) references Cliente(id_cliente)
);


create table Pizza(
	id_pizza int primary key not null,
    nome varchar(50),
    preco float
);

create table Ingrediente(
	id_ingrediente int primary key not null,
    nome varchar(150)
);

create table Pizzas_ingrediente(
	pizza_id int not null,
    ingrediente_id int not null,
    foreign key (pizza_id) references Pizza(id_pizza),
    foreign key (ingrediente_id) references Ingrediente(id_ingrediente)
);

create table Itens_do_pedido(
	id_item int primary key not null,
	pedido_id int not null,
    pizza_id int not null,
    quantidade int,
    foreign key (pedido_id) references Pedido(id_pedido),
    foreign key (pizza_id) references Pizza(id_pizza)
);


-- Inserindo dados na tabela Cliente
INSERT INTO Cliente (id_cliente, nome, telefone, endereco)
VALUES
    (1, 'João Silva', '(81) 9999-8888', 'Rua das Flores, 123'),
    (2, 'Maria Santos', '(81) 7777-6666', 'Avenida Principal, 456'),
    (3, 'José Oliveira', '(81) 3333-4444', 'Rua das Árvores, 789');

-- Inserindo dados na tabela Pizza
INSERT INTO Pizza (id_pizza, nome, preco)
VALUES
    (1, 'Margherita', 30.00),
    (2, 'Calabresa', 35.00),
    (3, 'Quatro Queijos', 40.00);

-- Inserindo dados na tabela Ingrediente
INSERT INTO Ingrediente (id_ingrediente, nome)
VALUES
    (1, 'Molho de Tomate'),
    (2, 'Mussarela'),
    (3, 'Presunto'),
    (4, 'Calabresa'),
    (5, 'Catupiry'),
    (6, 'Gorgonzola');

-- Inserindo dados na tabela Pizzas_ingrediente
INSERT INTO Pizzas_ingrediente (pizza_id, ingrediente_id)
VALUES
    (1, 1), 
    (1, 2),
    (2, 1),
    (2, 2), 
    (2, 4),
    (3, 1), 
    (3, 2), 
    (3, 5), 
    (3, 6);

-- Inserindo dados na tabela Pedido
INSERT INTO Pedido (id_pedido, cliente_id, data, total)
VALUES
    (1, 1, '2024-07-01', 65.00),
    (2, 1, '2024-07-02', 70.00),
    (3, 2, '2024-07-03', 40.00), 
    (4, 3, '2024-07-04', 75.00), 
    (5, 1, '2024-07-05', 55.00); 

-- Inserindo dados na tabela Itens_do_pedido
INSERT INTO Itens_do_pedido (id_item, pedido_id, pizza_id, quantidade)
VALUES
    (1, 1, 1, 2), 
    (2, 1, 2, 1),
    (3, 2, 2, 3), 
    (4, 2, 3, 1), 
    (5, 3, 3, 2), 
    (6, 4, 1, 1), 
    (7, 4, 2, 2), 
    (8, 5, 3, 1);


-- consultas de tabelas

-- Exibindo a tabela de cliente
SELECT * FROM Cliente;

-- Exibindo a tabela de Pizza
SELECT * FROM Pizza;

-- Exibindo a tabela de Ingrediente
SELECT * FROM Ingrediente;

-- Exibindo a tabela de pedido
SELECT * FROM Pedido;

-- Exibindo a tabela de Pizza_ingrediente
select*from Pizzas_ingrediente;

-- Listando ingredientes de uma pizza específica.
SELECT Pizza.nome AS nome_da_pizza, Ingrediente.nome AS nome_do_ingrediente
FROM Pizza
INNER JOIN Pizzas_ingrediente ON Pizza.id_pizza = Pizzas_ingrediente.pizza_id
INNER JOIN Ingrediente ON Pizzas_ingrediente.ingrediente_id = Ingrediente.id_ingrediente
WHERE Pizza.nome = 'Calabresa';

-- Listar todos os pedidos de um cliente específico 
SELECT Cliente.nome AS nome_cliente , id_pedido, Pedido.data AS data_do_pedido, Pedido.total AS total_pedido
FROM Pedido
INNER JOIN Cliente ON Pedido.cliente_id = Cliente.id_cliente
WHERE Cliente.id_cliente = 1;

-- Calcular o total de um pedido específico:
-- Abaixo estamos fazendo o resultado do total de um pedido onde o id e =1 
SELECT SUM(Pizza.preco * Itens_do_pedido.quantidade) AS total_calculado
FROM Itens_do_pedido
INNER JOIN Pizza ON Itens_do_pedido.pizza_id = Pizza.id_pizza
WHERE Itens_do_pedido.pedido_id = 1;
