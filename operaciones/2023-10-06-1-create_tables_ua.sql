-- reemplazar adecuadamente owner y, admin segun entorno

set role to eahpc2023_owner;
set search_path = "base";

drop table if exists actividades ;
drop table if exists personas ;
drop table if exists hogares ;
drop table if exists visitas ;
drop table if exists visitas_sup ;
drop table if exists personas_sup ;
drop table if exists hogares_sup ;
drop table if exists viviendas ;

create table "viviendas" (
  "operativo" text, 
  "vivienda" text, 
  "s1a1_obs" text, 
  "total_vis" bigint, 
  "entreav" bigint, 
  "f_realiz_o" date, 
  "confir_tel" bigint, 
  "contacto" bigint, 
  "confirma_dom" bigint, 
  "v1" bigint, 
  "total_h" bigint, 
  "razonv" bigint, 
  "razon2_1" bigint, 
  "razon2_2" bigint, 
  "razon2_3" bigint, 
  "razon2_4" bigint, 
  "razon2_5" bigint, 
  "razon2_6" bigint, 
  "razon3" text, 
  "vdominio" bigint,
  "consistido" timestamp
, primary key ("operativo", "vivienda")
);
grant select, insert, update, delete, references on "viviendas" to eahpc2023_admin;
grant all on "viviendas" to eahpc2023_owner;



create table "visitas" (
  "operativo" text, 
  "vivienda" text, 
  "visita" bigint, 
  "anoenc" bigint, 
  "rol" text, 
  "per" bigint, 
  "usu" text, 
  "fecha" text, 
  "hora" text, 
  "anotacion" text
, primary key ("operativo", "vivienda", "visita")
);
grant select, insert, update, delete, references on "visitas" to eahpc2023_admin;
grant all on "visitas" to eahpc2023_owner;



create table "hogares" (
  "operativo" text, 
  "vivienda" text, 
  "hogar" bigint, 
  "entrea" bigint, 
  "f_realiz_o" date, 
  "los_nombres" text, 
  "total_m" bigint, 
  "total_r" bigint, 
  "respond" bigint, 
  "nombrer" text, 
  "telefono" text, 
  "movil" text, 
  "correo" text, 
  "rmod" bigint, 
  "razon1" bigint, 
  "razon2_7" bigint, 
  "razon2_8" bigint, 
  "razon2_9" bigint, 
  "v2" bigint, 
  "v2_esp" text, 
  "v4" bigint, 
  "h2" bigint, 
  "h2_esp" text, 
  "h3" bigint, 
  "obs_a1" text
, primary key ("operativo", "vivienda", "hogar")
);
grant select, insert, update, delete, references on "hogares" to eahpc2023_admin;
grant all on "hogares" to eahpc2023_owner;



create table "personas" (
  "operativo" text, 
  "vivienda" text, 
  "hogar" bigint, 
  "persona" bigint, 
  "p0" bigint, 
  "nombre" text, 
  "r1" bigint, 
  "r2" bigint, 
  "r3" bigint, 
  "r4" bigint, 
  "r5" bigint, 
  "r6" bigint, 
  "r7" bigint, 
  "r0" bigint, 
  "sexo" bigint, 
  "f_nac_d" bigint, 
  "f_nac_m" bigint, 
  "f_nac_a" bigint, 
  "edad" bigint, 
  "p4" bigint, 
  "p5" bigint, 
  "p5b" bigint, 
  "p6a" bigint, 
  "p6b" bigint, 
  "obs" text, 
  "edadcalculada" bigint, 
  "nombrecalculado" text, 
  "sexocalculado" bigint, 
  "respondiente" bigint, 
  "t0" bigint, 
  "t1" bigint, 
  "t2" bigint, 
  "t3" bigint, 
  "t4" bigint, 
  "t5" bigint, 
  "t5_1a" bigint, 
  "t6" bigint, 
  "t7" bigint, 
  "t8" bigint, 
  "t8_otro" text, 
  "t9" bigint, 
  "t10" bigint, 
  "t11" bigint, 
  "t11_1" bigint, 
  "t11_1esp" text, 
  "t12" bigint, 
  "t12_bis" bigint, 
  "t11_2" bigint, 
  "t13_0" bigint, 
  "t13_0_edad" bigint, 
  "t13" bigint, 
  "t14" bigint, 
  "t15" bigint, 
  "t18" bigint, 
  "t18_0" bigint, 
  "t19" bigint, 
  "t20_1" bigint, 
  "t21_1" bigint, 
  "t22_1" bigint, 
  "t48a_d" bigint, 
  "t48b_d" bigint, 
  "t48b_d_esp" text, 
  "t48c_d" bigint, 
  "t48c_d_esp" text, 
  "t50_d_a" bigint, 
  "t50_d_b" bigint, 
  "t50_d_c" bigint, 
  "t50_d_d" bigint, 
  "t50_d_e" bigint, 
  "t50_d_f" bigint, 
  "t50_d_g" bigint, 
  "t50_d_h" bigint, 
  "t51_d" bigint, 
  "t51_e" bigint, 
  "t51_e_esp" text, 
  "t23_1" text, 
  "t23_1sd" bigint, 
  "t23_2" bigint, 
  "t24_1" text, 
  "t25_1" text, 
  "t26_1" text, 
  "t27_1" bigint, 
  "t27_2" bigint, 
  "t28" bigint, 
  "t29" bigint, 
  "t29a" bigint, 
  "t30" bigint, 
  "t31_d" bigint, 
  "t31_l" bigint, 
  "t31_ma" bigint, 
  "t31_mi" bigint, 
  "t31_j" bigint, 
  "t31_v" bigint, 
  "t31_s" bigint, 
  "t31_b" bigint, 
  "t32_d" bigint, 
  "t32_l" bigint, 
  "t32_ma" bigint, 
  "t32_mi" bigint, 
  "t32_j" bigint, 
  "t32_v" bigint, 
  "t32_s" bigint, 
  "t32_b" bigint, 
  "t33" bigint, 
  "t34" bigint, 
  "t35_0" bigint, 
  "t35" bigint, 
  "to1" bigint, 
  "t37" text, 
  "t37sd" bigint, 
  "t38" bigint, 
  "t39" bigint, 
  "t39_barrio" text, 
  "t39_partido" text, 
  "t39_otro" text, 
  "t40a" bigint, 
  "t40b" bigint, 
  "tu1" bigint, 
  "tu3a" bigint, 
  "tu3_cual" text, 
  "tu4" bigint, 
  "tu5" bigint, 
  "tu6" bigint, 
  "tu7" bigint, 
  "tu8a" bigint, 
  "tu8b" text, 
  "tu9" bigint, 
  "tu9_1_a" bigint, 
  "tu9_1_b" bigint, 
  "tu9_1_c" bigint, 
  "tu9_1_d" bigint, 
  "t41" text, 
  "t42" text, 
  "t43" text, 
  "tu10" bigint, 
  "tu10_1" bigint, 
  "t44" bigint, 
  "t45" bigint, 
  "t46" bigint, 
  "t47" bigint, 
  "t48" bigint, 
  "tu13_0" bigint, 
  "tu13" bigint, 
  "tu14" bigint, 
  "tu15" bigint, 
  "tu16_a" bigint, 
  "tu16_b" bigint, 
  "tu16_c" bigint, 
  "tu16_d" bigint, 
  "tu16_e" bigint, 
  "tu17_a" bigint, 
  "tu17_b" bigint, 
  "tu17_c" bigint, 
  "tu17_d" bigint, 
  "tu17_e" bigint, 
  "t48a" bigint, 
  "t48b" bigint, 
  "t48b_esp" text, 
  "tu18" bigint, 
  "tsd3_0" bigint, 
  "tsd3" bigint, 
  "tsd6" bigint, 
  "tsd4" bigint, 
  "tsd8" bigint, 
  "t49" bigint, 
  "ta2" bigint, 
  "ta3" bigint, 
  "ta4" bigint, 
  "ta4_esp" text, 
  "ta5" bigint, 
  "ta6" bigint, 
  "ta8_a" bigint, 
  "ta8_b" bigint, 
  "ta8_c" bigint, 
  "ta8_d" bigint, 
  "ta8_e" bigint, 
  "ta8_f" bigint, 
  "ta8_g" bigint, 
  "ta8_h" bigint, 
  "t51" bigint, 
  "i1" bigint, 
  "i4" bigint, 
  "i5" bigint, 
  "i6_1" bigint, 
  "i6_2" bigint, 
  "i6_3" bigint, 
  "i6_4" bigint, 
  "i6_5" bigint, 
  "i6_6" bigint, 
  "i6_7" bigint, 
  "i6_8" bigint, 
  "i6_9" bigint, 
  "i6_10" bigint, 
  "i6_10_esp" text, 
  "i7a" bigint, 
  "i7b" bigint, 
  "i7c" bigint, 
  "i7_0" bigint, 
  "i7_1" bigint, 
  "i7_2" bigint, 
  "i7_3" bigint, 
  "i10" bigint, 
  "i11" bigint, 
  "i12" bigint, 
  "i13" bigint, 
  "i14" bigint, 
  "t53_bis1" bigint, 
  "t53_bis1_sem" bigint, 
  "t53_bis1_mes" bigint, 
  "t53_bis2" bigint, 
  "tso37" text, 
  "t37sdso" bigint, 
  "tso38" bigint, 
  "tso39" bigint, 
  "tso39_barrio" text, 
  "tso39_partido" text, 
  "tso39_otro" text, 
  "tso40_1a" bigint, 
  "tso40_1b" bigint, 
  "tuso3a" bigint, 
  "tuso3_cual" text, 
  "tuso4" bigint, 
  "tuso5" bigint, 
  "tuso6" bigint, 
  "tuso7" bigint, 
  "tuso8a" bigint, 
  "tuso8_cual" text, 
  "tuso9" bigint, 
  "tuso9_1a" bigint, 
  "tuso9_1b" bigint, 
  "tuso9_1c" bigint, 
  "tuso9_1d" bigint, 
  "tso41" text, 
  "tso42" text, 
  "tso43" text, 
  "tuso10_1" bigint, 
  "tso44" bigint, 
  "tso45" bigint, 
  "tso46" bigint, 
  "tso47" bigint, 
  "tso48" bigint, 
  "tso48a" bigint, 
  "tso48b" bigint, 
  "tso48b_esp" text, 
  "tsdso3" bigint, 
  "tsdso6" bigint, 
  "tsdso4" bigint, 
  "tsdso8" bigint, 
  "taso1" bigint, 
  "taso8_a" bigint, 
  "taso8_b" bigint, 
  "taso8_c" bigint, 
  "taso8_d" bigint, 
  "taso8_e" bigint, 
  "taso8_f" bigint, 
  "taso8_g" bigint, 
  "taso8_h" bigint, 
  "tso51" bigint, 
  "i17" bigint, 
  "i17a" bigint, 
  "i17b" bigint, 
  "i20" bigint, 
  "i20a" bigint, 
  "i20b" bigint, 
  "i3_1" bigint, 
  "i3_34x" bigint, 
  "i3_i3_35" bigint, 
  "i3_35x" bigint, 
  "i3_i3_36" bigint, 
  "i3_36x" bigint, 
  "i3_2" bigint, 
  "i3_2x" bigint, 
  "i3_3" bigint, 
  "i3_3x" bigint, 
  "i3_4" bigint, 
  "i3_4x" bigint, 
  "i3_5" bigint, 
  "i3_5x" bigint, 
  "i3_6" bigint, 
  "i3_6x" bigint, 
  "i3_7" bigint, 
  "i3_7x" bigint, 
  "i3_81" bigint, 
  "i3_81x" bigint, 
  "i3_82" bigint, 
  "i3_82x" bigint, 
  "i3_11" bigint, 
  "i3_11x" bigint, 
  "i3_32" bigint, 
  "i3_32x" bigint, 
  "i3_31" bigint, 
  "i3_31x" bigint, 
  "i3_12" bigint, 
  "i3_12x" bigint, 
  "i3_13" bigint, 
  "i3_13x" bigint, 
  "i3_13a" bigint, 
  "i3_10" bigint, 
  "i3_10x" bigint, 
  "i3_10_otro" text, 
  "h20i_1" bigint, 
  "h20i_2" bigint, 
  "e2" bigint, 
  "e4" bigint, 
  "e6" bigint, 
  "e8" bigint, 
  "e12" bigint, 
  "e13" bigint, 
  "e14" bigint, 
  "m1a" bigint, 
  "m1_esp_2" text, 
  "m1_esp_3" text, 
  "m1_esp_4" text, 
  "m1_annio" bigint, 
  "m3a" bigint, 
  "m3b" bigint, 
  "sn1_1" bigint, 
  "sn1_1_esp" text, 
  "sn1_7" bigint, 
  "sn1_7_esp" text, 
  "sn1_2" bigint, 
  "sn1_2_esp" text, 
  "sn1_3" bigint, 
  "sn1_3_esp" text, 
  "sn1_4" bigint, 
  "sn1_4_esp" text, 
  "sn1_5" bigint, 
  "sn2_1" bigint, 
  "sn2_cuantas" bigint, 
  "sn3" bigint, 
  "sn4" bigint, 
  "sn4_otro" text, 
  "sn5" bigint, 
  "sn5_otro" text, 
  "sn11" bigint, 
  "sn13" bigint, 
  "sn13_esp" text, 
  "sn14" bigint, 
  "sn16" bigint, 
  "s28" bigint, 
  "s29" bigint, 
  "s31a" bigint, 
  "s31b" bigint, 
  "dh1" bigint, 
  "dh2" bigint, 
  "dh2_cual" text, 
  "dh3" bigint, 
  "dh3_cual" text
, primary key ("operativo", "vivienda", "hogar", "persona")
);
grant select, insert, update, delete, references on "personas" to eahpc2023_admin;
grant all on "personas" to eahpc2023_owner;


-- conss
alter table "viviendas" add constraint "operativo<>''" check ("operativo"<>'');
alter table "viviendas" alter column "operativo" set not null;
alter table "viviendas" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "viviendas" alter column "vivienda" set not null;
alter table "viviendas" add constraint "s1a1_obs<>''" check ("s1a1_obs"<>'');
alter table "viviendas" add constraint "razon3<>''" check ("razon3"<>'');
alter table "visitas" add constraint "operativo<>''" check ("operativo"<>'');
alter table "visitas" alter column "operativo" set not null;
alter table "visitas" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "visitas" alter column "vivienda" set not null;
alter table "visitas" alter column "visita" set not null;
alter table "visitas" add constraint "rol<>''" check ("rol"<>'');
alter table "visitas" add constraint "usu<>''" check ("usu"<>'');
alter table "visitas" add constraint "fecha<>''" check ("fecha"<>'');
alter table "visitas" add constraint "hora<>''" check ("hora"<>'');
alter table "visitas" add constraint "anotacion<>''" check ("anotacion"<>'');
alter table "hogares" add constraint "operativo<>''" check ("operativo"<>'');
alter table "hogares" alter column "operativo" set not null;
alter table "hogares" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "hogares" alter column "vivienda" set not null;
alter table "hogares" alter column "hogar" set not null;
alter table "hogares" add constraint "los_nombres<>''" check ("los_nombres"<>'');
alter table "hogares" add constraint "nombrer<>''" check ("nombrer"<>'');
alter table "hogares" add constraint "telefono<>''" check ("telefono"<>'');
alter table "hogares" add constraint "movil<>''" check ("movil"<>'');
alter table "hogares" add constraint "correo<>''" check ("correo"<>'');
alter table "hogares" add constraint "v2_esp<>''" check ("v2_esp"<>'');
alter table "hogares" add constraint "h2_esp<>''" check ("h2_esp"<>'');
alter table "hogares" add constraint "obs_a1<>''" check ("obs_a1"<>'');
alter table "personas" add constraint "operativo<>''" check ("operativo"<>'');
alter table "personas" alter column "operativo" set not null;
alter table "personas" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "personas" alter column "vivienda" set not null;
alter table "personas" alter column "hogar" set not null;
alter table "personas" alter column "persona" set not null;
alter table "personas" add constraint "nombre<>''" check ("nombre"<>'');
alter table "personas" add constraint "obs<>''" check ("obs"<>'');
alter table "personas" add constraint "nombrecalculado<>''" check ("nombrecalculado"<>'');
alter table "personas" add constraint "t8_otro<>''" check ("t8_otro"<>'');
alter table "personas" add constraint "t11_1esp<>''" check ("t11_1esp"<>'');
alter table "personas" add constraint "t48b_d_esp<>''" check ("t48b_d_esp"<>'');
alter table "personas" add constraint "t48c_d_esp<>''" check ("t48c_d_esp"<>'');
alter table "personas" add constraint "t51_e_esp<>''" check ("t51_e_esp"<>'');
alter table "personas" add constraint "t23_1<>''" check ("t23_1"<>'');
alter table "personas" add constraint "t24_1<>''" check ("t24_1"<>'');
alter table "personas" add constraint "t25_1<>''" check ("t25_1"<>'');
alter table "personas" add constraint "t26_1<>''" check ("t26_1"<>'');
alter table "personas" add constraint "t37<>''" check ("t37"<>'');
alter table "personas" add constraint "t39_barrio<>''" check ("t39_barrio"<>'');
alter table "personas" add constraint "t39_partido<>''" check ("t39_partido"<>'');
alter table "personas" add constraint "t39_otro<>''" check ("t39_otro"<>'');
alter table "personas" add constraint "tu3_cual<>''" check ("tu3_cual"<>'');
alter table "personas" add constraint "tu8b<>''" check ("tu8b"<>'');
alter table "personas" add constraint "t41<>''" check ("t41"<>'');
alter table "personas" add constraint "t42<>''" check ("t42"<>'');
alter table "personas" add constraint "t43<>''" check ("t43"<>'');
alter table "personas" add constraint "t48b_esp<>''" check ("t48b_esp"<>'');
alter table "personas" add constraint "ta4_esp<>''" check ("ta4_esp"<>'');
alter table "personas" add constraint "i6_10_esp<>''" check ("i6_10_esp"<>'');
alter table "personas" add constraint "tso37<>''" check ("tso37"<>'');
alter table "personas" add constraint "tso39_barrio<>''" check ("tso39_barrio"<>'');
alter table "personas" add constraint "tso39_partido<>''" check ("tso39_partido"<>'');
alter table "personas" add constraint "tso39_otro<>''" check ("tso39_otro"<>'');
alter table "personas" add constraint "tuso3_cual<>''" check ("tuso3_cual"<>'');
alter table "personas" add constraint "tuso8_cual<>''" check ("tuso8_cual"<>'');
alter table "personas" add constraint "tso41<>''" check ("tso41"<>'');
alter table "personas" add constraint "tso42<>''" check ("tso42"<>'');
alter table "personas" add constraint "tso43<>''" check ("tso43"<>'');
alter table "personas" add constraint "tso48b_esp<>''" check ("tso48b_esp"<>'');
alter table "personas" add constraint "i3_10_otro<>''" check ("i3_10_otro"<>'');
alter table "personas" add constraint "m1_esp_2<>''" check ("m1_esp_2"<>'');
alter table "personas" add constraint "m1_esp_3<>''" check ("m1_esp_3"<>'');
alter table "personas" add constraint "m1_esp_4<>''" check ("m1_esp_4"<>'');
alter table "personas" add constraint "sn1_1_esp<>''" check ("sn1_1_esp"<>'');
alter table "personas" add constraint "sn1_7_esp<>''" check ("sn1_7_esp"<>'');
alter table "personas" add constraint "sn1_2_esp<>''" check ("sn1_2_esp"<>'');
alter table "personas" add constraint "sn1_3_esp<>''" check ("sn1_3_esp"<>'');
alter table "personas" add constraint "sn1_4_esp<>''" check ("sn1_4_esp"<>'');
alter table "personas" add constraint "sn4_otro<>''" check ("sn4_otro"<>'');
alter table "personas" add constraint "sn5_otro<>''" check ("sn5_otro"<>'');
alter table "personas" add constraint "sn13_esp<>''" check ("sn13_esp"<>'');
alter table "personas" add constraint "dh2_cual<>''" check ("dh2_cual"<>'');
alter table "personas" add constraint "dh3_cual<>''" check ("dh3_cual"<>'');

-- FKs
alter table "visitas" add constraint "visitas viviendas REL" foreign key ("operativo", "vivienda") references "viviendas" ("operativo", "vivienda")  on delete cascade on update cascade;
alter table "hogares" add constraint "hogares viviendas REL" foreign key ("operativo", "vivienda") references "viviendas" ("operativo", "vivienda")  on delete cascade on update cascade;
alter table "personas" add constraint "personas hogares REL" foreign key ("operativo", "vivienda", "hogar") references "hogares" ("operativo", "vivienda", "hogar")  on delete cascade on update cascade;

-- index
create index "operativo,vivienda 4 visitas IDX" ON "visitas" ("operativo", "vivienda");
create index "operativo,vivienda 4 hogares IDX" ON "hogares" ("operativo", "vivienda");
create index "operativo,vivienda,hogar 4 personas IDX" ON "personas" ("operativo", "vivienda", "hogar");
