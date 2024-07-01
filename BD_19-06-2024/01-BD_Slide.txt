create database equipe;
use equipe;


create table membros(
	id_membro int primary key not null,
    nome varchar(100),
    cargo varchar(50)
);

create table tarefas(
	id_tarefa int primary key not null,
    descricao text,
    membro_id int not null,
    foreign key (membro_id) references membros(id_membro)
);

-- adicionando novas colunas as tabelas como solicitado no slide.
alter table membros add genero char(1);
alter table tarefas add data_inicio date;
alter table tarefas add data_final date;




-- Povoando as tabelas.
insert into membros(id_membro,nome,cargo)
values
(1,'João Silva' , 'Desenvolvedor Full Stack'),
(2,'Maria Santos', 'Analista  de Banco de Dados'),
(3,'Pedro Oliveira','Engenheiro de software'),
(4,'Ana Costa','Administradora de redes'),
(5,'Carlos Souza','Especialista em Segurança da Informação');

-- Povoando a tabela de tarefas
insert into tarefas(id_tarefa,descricao,membro_id)
values
(1,'Desenvolver novo módulo de login para o sistema',1),
(2,'Realizar manutenção preventiva nos servidores.',2),
(3,'Criar documentação técnica do projeto XYZ.',3),
(4,'Testar e validar integração com API externa.',4),
(5,'Implementar melhorias na interface do usuário',5);

 
-- Utilizando updates com base no resto da divisão para não fazer tudo manualmente
-- para funcionar precisamos desativar o modo seguro workbench.
set sql_safe_updates=0;

update membros set genero="M" where id_membro %2<>0;
update membros set genero="F" where id_membro %2<>1;
update tarefas set data_inicio ="2024-08-10" where id_tarefa %2<>0;
update tarefas set data_inicio ="2024-06-10" where id_tarefa %2<>1;   
update tarefas set data_final = "2024-10-8" where id_tarefa %2<>0;
update tarefas set data_final = "2024-12-15" where id_tarefa % 2<>1;

-- Trocando o cargo da Ana Costa como solicitado no slide.
update membros set cargo = "Administradora de Rede Sênior" where id_membro=4;

-- 1. Escreva uma consulta(sql) que exiba todos os funcionários que começam com a letra A.
select * from membros where nome like 'a%'; 

-- 2. Escreva uma consulta (sql) que exiba todos os funcionários , onde o cargo contenha a letra ‘e’.
select * from membros where cargo like '%e%';

-- 3. Escreva uma consulta (sql) que exiba o nome e o cargo dos funcionários,
-- onde o nome termine com a letra ‘a’ e o cargo começe com a letra ‘d’.
select nome,cargo from membros where nome like '%a' and cargo like 'd%';

select * from membros;
select * from tarefas;


-- visualização de todas as relaçoes entre  tabelas.
select membros.*, tarefas.* from membros inner join tarefas on membros.id_membro = tarefas.id_tarefa;