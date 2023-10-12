DROP FUNCTION IF EXISTS base.update_varcal_por_encuesta(text, text);
DROP FUNCTION IF EXISTS base.update_varcal(text);

set role eahpc2023_admin;
--CAMBIAR ROL  de acuerdo al entorno
-- REEMPLAZAR TAMBIENA EL OWNER

do $SQL_DUMP$
 begin
----
set search_path = base, comun;
----
drop table if exists "prc_eah2023_personas_calculada";
drop table if exists "prc_eah2023_hogares_calculada";
drop table if exists "prc_eah2023_visitas_calculada";
drop table if exists "prc_eah2023_viviendas_calculada";
drop table if exists "prc_eah2023_tem_calculada";
----


--
-- lines
create table "prc_eah2023_hogares_calculada" (
  "operativo" text, 
  "vivienda" text, 
  "hogar" bigint,
  "cant_per" bigint 
, primary key ("operativo", "vivienda", "hogar")
);
grant select, insert, update, references on "prc_eah2023_hogares_calculada" to eahpc2023_admin;
grant all on "prc_eah2023_hogares_calculada" to eahpc2023_owner;


create table "prc_eah2023_personas_calculada" (
  "operativo" text, 
  "vivienda" text, 
  "hogar" bigint, 
  "persona" bigint
, primary key ("operativo", "vivienda", "hogar", "persona")
);
grant select, insert, update, references on "prc_eah2023_personas_calculada" to eahpc2023_admin;
grant all on "prc_eah2023_personas_calculada" to eahpc2023_owner;


create table "prc_eah2023_tem_calculada" (
  "operativo" text, 
  "enc" text
, primary key ("operativo", "enc")
);
grant select, insert, update, references on "prc_eah2023_tem_calculada" to eahpc2023_admin;
grant all on "prc_eah2023_tem_calculada" to eahpc2023_owner;


create table "prc_eah2023_visitas_calculada" (
  "operativo" text, 
  "vivienda" text, 
  "visita" bigint
, primary key ("operativo", "vivienda", "visita")
);
grant select, insert, update, references on "prc_eah2023_visitas_calculada" to eahpc2023_admin;
grant all on "prc_eah2023_visitas_calculada" to eahpc2023_owner;


create table "prc_eah2023_viviendas_calculada" (
  "operativo" text, 
  "vivienda" text,
  "cant_vis" bigint 
, primary key ("operativo", "vivienda")
);
grant select, insert, update, references on "prc_eah2023_viviendas_calculada" to eahpc2023_admin;
grant all on "prc_eah2023_viviendas_calculada" to eahpc2023_owner;



-- conss
alter table "prc_eah2023_hogares_calculada" add constraint "operativo<>''" check ("operativo"<>'');
alter table "prc_eah2023_hogares_calculada" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "prc_eah2023_personas_calculada" add constraint "operativo<>''" check ("operativo"<>'');
alter table "prc_eah2023_personas_calculada" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "prc_eah2023_tem_calculada" add constraint "operativo<>''" check ("operativo"<>'');
alter table "prc_eah2023_tem_calculada" add constraint "enc<>''" check ("enc"<>'');
alter table "prc_eah2023_visitas_calculada" add constraint "operativo<>''" check ("operativo"<>'');
alter table "prc_eah2023_visitas_calculada" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "prc_eah2023_viviendas_calculada" add constraint "operativo<>''" check ("operativo"<>'');
alter table "prc_eah2023_viviendas_calculada" add constraint "vivienda<>''" check ("vivienda"<>'');
-- FKs
alter table "prc_eah2023_hogares_calculada" add constraint "prc_eah2023_hogares_calculada hogares REL" foreign key ("operativo", "vivienda", "hogar") references "hogares" ("operativo", "vivienda", "hogar")  on delete cascade on update cascade;
alter table "prc_eah2023_personas_calculada" add constraint "prc_eah2023_personas_calculada personas REL" foreign key ("operativo", "vivienda", "hogar", "persona") references "personas" ("operativo", "vivienda", "hogar", "persona")  on delete cascade on update cascade;
alter table "prc_eah2023_tem_calculada" add constraint "prc_eah2023_tem_calculada tem REL" foreign key ("operativo", "enc") references "tem" ("operativo", "enc")  on delete cascade on update cascade;
alter table "prc_eah2023_visitas_calculada" add constraint "prc_eah2023_visitas_calculada visitas REL" foreign key ("operativo", "vivienda", "visita") references "visitas" ("operativo", "vivienda", "visita")  on delete cascade on update cascade;
alter table "prc_eah2023_viviendas_calculada" add constraint "prc_eah2023_viviendas_calculada viviendas REL" foreign key ("operativo", "vivienda") references "viviendas" ("operativo", "vivienda")  on delete cascade on update cascade;
-- index
create index "operativo,vivienda,hogar 4 prc_eah2023_hogares_calculada IDX" ON "prc_eah2023_hogares_calculada" ("operativo", "vivienda", "hogar");
create index "prc_eah2023_personas_calculada personas IDX" ON "prc_eah2023_personas_calculada" ("operativo", "vivienda", "hogar", "persona");
create index "operativo,enc 4 prc_eah2023_tem_calculada IDX" ON "prc_eah2023_tem_calculada" ("operativo", "enc");
create index "operativo,vivienda,visita 4 prc_eah2023_visitas_calculada IDX" ON "prc_eah2023_visitas_calculada" ("operativo", "vivienda", "visita");
create index "operativo,vivienda 4 prc_eah2023_viviendas_calculada IDX" ON "prc_eah2023_viviendas_calculada" ("operativo", "vivienda");
-- policies

----
            INSERT INTO "prc_eah2023_viviendas_calculada" ("operativo","vivienda") 
              SELECT "operativo","vivienda" FROM "viviendas";

            INSERT INTO "prc_eah2023_tem_calculada" ("operativo","enc") 
              SELECT "operativo","enc" FROM "tem";

            INSERT INTO "prc_eah2023_visitas_calculada" ("operativo","vivienda","visita") 
              SELECT "operativo","vivienda","visita" FROM "visitas";

            INSERT INTO "prc_eah2023_hogares_calculada" ("operativo","vivienda","hogar") 
              SELECT "operativo","vivienda","hogar" FROM "hogares";

            INSERT INTO "prc_eah2023_personas_calculada" ("operativo","vivienda","hogar","persona") 
              SELECT "operativo","vivienda","hogar","persona" FROM "personas";

----
CREATE OR REPLACE FUNCTION base.gen_fun_var_calc() RETURNS TEXT
  LANGUAGE PLPGSQL AS
$GENERATOR$
declare
  v_sql text:=$THE_FUN$
CREATE OR REPLACE FUNCTION update_varcal_por_encuesta("p_operativo" text, "p_id_caso" text) RETURNS TEXT
  LANGUAGE PLPGSQL AS
$BODY$
BEGIN
-- Cada vez que se actualizan las variables calculadas, previamente se deben insertar los registros que no existan (on conflict do nothing)
-- de las tablas base (solo los campos pks), sin filtrar por p_id_caso para update_varcal o con dicho filtro para update_varcal_por_encuesta
    INSERT INTO "prc_eah2023_viviendas_calculada" ("operativo","vivienda") 
      SELECT "operativo","vivienda" FROM "viviendas" WHERE operativo=p_operativo AND "vivienda"=p_id_caso ON CONFLICT DO NOTHING;
    INSERT INTO "prc_eah2023_tem_calculada" ("operativo","enc") 
      SELECT "operativo","enc" FROM "tem" WHERE operativo=p_operativo AND "enc"=p_id_caso ON CONFLICT DO NOTHING;
    INSERT INTO "prc_eah2023_visitas_calculada" ("operativo","vivienda","visita") 
      SELECT "operativo","vivienda","visita" FROM "visitas" WHERE operativo=p_operativo AND "vivienda"=p_id_caso ON CONFLICT DO NOTHING;
    INSERT INTO "prc_eah2023_hogares_calculada" ("operativo","vivienda","hogar") 
      SELECT "operativo","vivienda","hogar" FROM "hogares" WHERE operativo=p_operativo AND "vivienda"=p_id_caso ON CONFLICT DO NOTHING;
    INSERT INTO "prc_eah2023_personas_calculada" ("operativo","vivienda","hogar","persona") 
      SELECT "operativo","vivienda","hogar","persona" FROM "personas" WHERE operativo=p_operativo AND "vivienda"=p_id_caso ON CONFLICT DO NOTHING;
----

    UPDATE prc_eah2023_hogares_calculada
        SET 
            cant_per = personas_agg.cant_per
        FROM "hogares"  
            ,LATERAL (
            SELECT
                count(nullif(true,false)) as cant_per
            FROM "personas" JOIN "prc_eah2023_personas_calculada" using ("operativo","vivienda","hogar","persona")
                WHERE "hogares"."operativo"="personas"."operativo" 
                AND "hogares"."vivienda"="personas"."vivienda" 
                AND "hogares"."hogar"="personas"."hogar"
            ) as personas_agg
        WHERE "hogares"."operativo"="prc_eah2023_hogares_calculada"."operativo" 
            AND "hogares"."vivienda"="prc_eah2023_hogares_calculada"."vivienda" 
            AND "hogares"."hogar"="prc_eah2023_hogares_calculada"."hogar" 
            AND "hogares"."operativo"=p_operativo AND "hogares"."vivienda"=p_id_caso;


    UPDATE prc_eah2023_viviendas_calculada
        SET 
            cant_vis = visitas_agg.cant_vis
        FROM "viviendas"  
            ,LATERAL (
            SELECT
                count(nullif(true,false)) as cant_vis
                FROM "visitas" JOIN "prc_eah2023_visitas_calculada" using ("operativo","vivienda","visita")
                WHERE "viviendas"."vivienda"="visitas"."vivienda" 
                AND "viviendas"."operativo"="visitas"."operativo"
            ) as visitas_agg
        WHERE "viviendas"."operativo"="prc_eah2023_viviendas_calculada"."operativo" 
            AND "viviendas"."vivienda"="prc_eah2023_viviendas_calculada"."vivienda" 
            AND "viviendas"."operativo"=p_operativo AND "viviendas"."vivienda"=p_id_caso;


----
  RETURN 'OK';
END;
$BODY$;
$THE_FUN$;
begin 
  -- TODO: hacer este reemplazo en JS
  execute v_sql;
  execute replace(replace(regexp_replace(replace(
    v_sql,
    $$update_varcal_por_encuesta("p_operativo" text, "p_id_caso" text) RETURNS TEXT$$, $$update_varcal("p_operativo" text) RETURNS TEXT$$),
    $$(.* )".*"\."vivienda"=p_id_caso(.*)$$, $$\1TRUE\2$$,'gm'),
    $$"enc"=p_id_caso$$, $$TRUE$$),
    $$"vivienda"=p_id_caso$$, $$TRUE$$);
  return '2GENERATED';
end;
$GENERATOR$;        
----
perform gen_fun_var_calc();
----

UPDATE operativos SET calculada=now()::timestamp(0) WHERE operativo='PRC_EAH2023';
UPDATE tabla_datos SET generada=now()::timestamp(0) WHERE operativo='PRC_EAH2023' AND tipo='calculada';
----
end;
$SQL_DUMP$;--- boton calcular generado: Fri Jun 23 2023 13:30:45 GMT-0300 (hora estándar de Argentina)

select update_varcal('PRC_EAH2023');
