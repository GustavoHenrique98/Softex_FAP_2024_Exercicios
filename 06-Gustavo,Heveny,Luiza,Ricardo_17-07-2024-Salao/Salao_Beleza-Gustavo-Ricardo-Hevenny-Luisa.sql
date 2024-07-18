create database salao_beleza;
-- drop database salao_beleza;
use salao_beleza;

create table Clientes(
	cpf varchar(20) primary key not null,
    nome varchar(100),
    telefone varchar(20),
    nome_servico varchar(50) not null,
    foreign key (nome_servico) references Servicos (nome_servico)
);

create table Agendamentos(
	id_agendamento int primary key not null,
    data datetime,
    nome_servico varchar(50) not null,
    cpf_cliente varchar(20) not null,
    foreign key (nome_servico) references Servicos (nome_servico),
    foreign key (cpf_cliente) references Clientes (cpf)
);

create table Servicos(
	nome_servico varchar(50) primary key not null,
    categoria varchar(20),
    duracao_media time,
    preco float
);

-- Populando a tabela Servicos
INSERT INTO Servicos (nome_servico, categoria, duracao_media, preco)
VALUES
    ('Corte de Cabelo Masculino', 'Cabelo', '00:30:00', 50.00),
    ('Corte de Cabelo Feminino', 'Cabelo', '00:45:00', 80.00),
    ('Manicure', 'Estética', '00:45:00', 60.00),
    ('Pedicure', 'Estética', '01:00:00', 80.00),
    ('Massagem Relaxante', 'Massagem', '01:00:00', 120.00);

-- Populando a tabela Clientes
INSERT INTO Clientes (cpf, nome, telefone, nome_servico)
VALUES
    ('12345678900', 'João Silva', '(11) 98765-4321', 'Corte de Cabelo Masculino'),
    ('98765432100', 'Maria Souza', '(21) 98765-1234', 'Corte de Cabelo Feminino'),
    ('11122233344', 'Ana Oliveira', '(31) 99999-8888', 'Manicure'),
    ('55566677788', 'Pedro Santos', '(41) 12345-6789', 'Pedicure'),
    ('99988877766', 'Carla Mendes', '(51) 77777-9999', 'Massagem Relaxante');

-- Populando a tabela Agendamentos
INSERT INTO Agendamentos (id_agendamento, data, nome_servico, cpf_cliente)
VALUES
    (1, '2024-07-20 10:00:00', 'Corte de Cabelo Masculino', '12345678900'),
    (2, '2024-07-21 11:00:00', 'Corte de Cabelo Feminino', '98765432100'),
    (3, '2024-07-22 12:00:00', 'Manicure', '11122233344'),
    (4, '2024-07-23 13:00:00', 'Pedicure', '55566677788'),
    (5, '2024-07-24 14:00:00', 'Massagem Relaxante', '99988877766');


select * from  Servicos;
select * from Clientes;
select * from Agendamentos;

select Clientes.cpf, Clientes.nome, Agendamentos.data, Servicos.nome_servico, Servicos.preco, Servicos.duracao_media
from Clientes 
inner join Servicos inner join Agendamentos 
where Clientes.cpf = Agendamentos.cpf_cliente;
