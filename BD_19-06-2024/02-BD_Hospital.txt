create database hospital;
-- drop database hospital;
use hospital;

create table medicos(
	crm varchar(50) primary key not null,
    nome varchar(100),
    genero char(1),
    telefone char(16),
    endereco varchar(100),
    especializacao varchar(50)
);

create table pacientes(
	cpf varchar(30) primary key,
    nome varchar(30),
    genero varchar(50),
    telefone varchar(30),
    data_nascimento date
);


create table consultas(
	id_consulta int primary key,
    data date,
    hora time,
    diagnostico text,
    receita text,
    observacoes	text,
    cpf_paciente varchar(30) ,
    crm_medico varchar(50) not null,
    foreign key (cpf_paciente) references pacientes(cpf),
    foreign key (crm_medico) references medicos(crm)
    
    
);

-- Povando as tabelas

-- Médicos

INSERT INTO medicos (crm, nome, genero, telefone, endereco, especializacao)
VALUES
('CRM001', 'Dr. Santana', 'M', '(81)97777-8888', 'Rua A, 123', 'Cardiologia'),
('CRM002', 'Dra. Oliveira', 'F', '(81)96666-5555', 'Rua B, 456', 'Dermatologia'),
('CRM003', 'Dr. Carlos Pereira', 'M', '(81)95555-4444', 'Rua C, 789', 'Neurologia');


-- Pacientes 
INSERT INTO pacientes (cpf, nome, genero, telefone, data_nascimento)
VALUES
('111.111.111-22', 'João Silva', 'M', '(81)95050-4040', '1980-01-01'),
('222.222.222-33', 'Maria Clara', 'F', '(81)94040-3030', '1990-02-02'),
('333.333.333-44', 'Jairo Albuquerque', 'M', '(81)93030-2020', '1975-03-03');


-- consultas

INSERT INTO consultas (id_consulta, data, hora, diagnostico, receita, observacoes, cpf_paciente, crm_medico)
VALUES
(1, '2024-06-01', '10:00:00', 'Hipertensão', 'Losartana', 'Paciente está estável.', '111.111.111-22', 'CRM001'),
(2, '2024-06-02', '11:00:00', 'Dermatite', 'Creme tópico', 'Aplicar duas vezes ao dia.', '222.222.222-33', 'CRM002'),
(3, '2024-06-03', '12:00:00', 'Enxaqueca', 'Paracetamol', 'Repouso e hidratação.', '333.333.333-44', 'CRM003');


-- visualizando tabela de médicos
select*from medicos;
-- visualizando tabela de pacientes.
select*from pacientes;
-- visualizando tabela de consultas.
select*from consultas;

 
-- visualizando a relação entre tabelas;
 
SELECT c.*, m.*, p.*
FROM consultas c
INNER JOIN medicos m ON c.crm_medico = m.crm
INNER JOIN pacientes p ON c.cpf_paciente = p.cpf;