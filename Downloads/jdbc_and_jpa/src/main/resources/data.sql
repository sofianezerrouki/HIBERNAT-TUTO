create table person
(
        id integer not null ,
        name varchar (255) not null,
        location varchar (255),
        birth_date timestamp ,
        primary key(id)
);
insert into person
(id, name, location, birth_date)
values(1001, 'mohamed','Lacadat tiaret',sysdate());

insert into person
(id, name, location, birth_date)
values(1002, 'yacine','Lacadat tiaret',sysdate());

insert into person
(id, name, location, birth_date)
values(1003, 'ahmed','Trig bayda tiaret',sysdate());

insert into person
(id, name, location, birth_date)
values(1004, 'sofiane','Lacadat tiaret',sysdate());