"use strict";
                
import {TableDefinition, TableContext} from "./types-eah";
export function personas(context:TableContext):TableDefinition {
    var esEditable=context.user.rol==='admin';
    return {
    "name": "personas",
    editable: esEditable,
    "fields": [
        {
            "name": "operativo",
            "typeName": "text",
            "nullable": false
        },
        {
            "name": "vivienda",
            "typeName": "text",
            "nullable": false
        },
        {
            "name": "hogar",
            "typeName": "bigint",
            "nullable": false
        },
        {
            "name": "persona",
            "typeName": "bigint",
            "nullable": false
        },
        {
            "name": "p0",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "nombre",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "r1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "r2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "r3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "r4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "r5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "r6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "r7",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "r0",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sexo",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "f_nac_d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "f_nac_m",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "f_nac_a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "edad",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "p4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "p5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "p5b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "p6a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "p6b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "obs",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "edadcalculada",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "nombrecalculado",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sexocalculado",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "respondiente",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t0",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t5_1a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t7",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t8",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t8_otro",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t9",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t10",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t11",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t11_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t11_1esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t12",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t12_bis",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t11_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t13_0",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t13_0_edad",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t13",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t14",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t15",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t18",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t18_0",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t19",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t20_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t21_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t22_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t48a_d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t48b_d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t48b_d_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t48c_d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t48c_d_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t50_d_a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t50_d_b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t50_d_c",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t50_d_d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t50_d_e",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t50_d_f",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t50_d_g",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t50_d_h",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t51_d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t51_e",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t51_e_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t23_1",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t23_1sd",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t23_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t24_1",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t25_1",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t26_1",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t27_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t27_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t28",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t29",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t29a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t30",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t31_d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t31_l",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t31_ma",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t31_mi",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t31_j",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t31_v",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t31_s",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t31_b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t32_d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t32_l",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t32_ma",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t32_mi",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t32_j",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t32_v",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t32_s",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t32_b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t33",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t34",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t35_0",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t35",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "to1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t37",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t37sd",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t38",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t39",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t39_barrio",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t39_partido",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t39_otro",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t40a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t40b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu3a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu3_cual",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "tu4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu7",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu8a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu8b",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "tu9",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu9_1_a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu9_1_b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu9_1_c",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu9_1_d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t41",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t42",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t43",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "tu10",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu10_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t44",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t45",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t46",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t47",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t48",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu13_0",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu13",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu14",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu15",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu16_a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu16_b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu16_c",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu16_d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu16_e",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu17_a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu17_b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu17_c",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu17_d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tu17_e",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t48a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t48b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t48b_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "tu18",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tsd3_0",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tsd3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tsd6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tsd4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tsd8",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t49",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ta2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ta3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ta4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ta4_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "ta5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ta6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ta8_a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ta8_b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ta8_c",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ta8_d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ta8_e",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ta8_f",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ta8_g",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ta8_h",
            "typeName": "bigint",
            "nullable": true
        },     
        {
            "name": "t51",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i6_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i6_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i6_3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i6_4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i6_5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i6_6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i6_7",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i6_8",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i6_9",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i6_10",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i6_10_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "i7a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i7b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i7c",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i7_0",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i7_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i7_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i7_3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i10",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i11",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i12",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i13",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i14",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t53_bis1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t53_bis1_sem",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t53_bis1_mes",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "t53_bis2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso37",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "t37sdso",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso38",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso39",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso39_barrio",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "tso39_partido",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "tso39_otro",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "tso40_1a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso40_1b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tuso3a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tuso3_cual",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "tuso4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tuso5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tuso6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tuso7",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tuso8a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tuso8_cual",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "tuso9",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tuso9_1a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tuso9_1b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tuso9_1c",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tuso9_1d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso41",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "tso42",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "tso43",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "tuso10_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso44",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso45",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso46",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso47",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso48",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso48a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso48b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso48b_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "tsdso3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tsdso6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tsdso4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tsdso8",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "taso1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "taso8_a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "taso8_b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "taso8_c",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "taso8_d",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "taso8_e",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "taso8_f",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "taso8_g",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "taso8_h",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tso51",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i17",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i17a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i17b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i20",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i20a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i20b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_34x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_i3_35",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_35x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_i3_36",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_36x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_2x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_3x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_4x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_5x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_6x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_7",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_7x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_81",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_81x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_82",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_82x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_11",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_11x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_32",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_32x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_31",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_31x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_12",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_12x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_13",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_13x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_13a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_10",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_10x",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "i3_10_otro",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "h20i_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "h20i_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "e2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "e4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "e6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "e8",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "e12",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "e13",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "e14",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "m1a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "m1_esp_2",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "m1_esp_3",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "m1_esp_4",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "m1_annio",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "m3a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "m3b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn1_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn1_1_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sn1_7",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn1_7_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sn1_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn1_2_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sn1_3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn1_3_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sn1_4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn1_4_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sn1_5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn2_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn2_cuantas",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn4_otro",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sn5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn5_otro",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sn11",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn13",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn13_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sn14",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sn16",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "s28",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "s29",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "s31a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "s31b",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "dh1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "dh2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "dh2_cual",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "dh3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "dh3_cual",
            "typeName": "text",
            "nullable": true
        }
    ],
    "sql": {
        "isReferable": true,
        skipEnance: true,
    },
    "primaryKey": [
        "operativo",
        "vivienda",
        "hogar",
        "persona"
    ],
    "detailTables": [
    ],
    "foreignKeys": [
        {
            "references": "hogares",
            "fields": [
                "operativo",
                "vivienda",
                "hogar"
            ],
            "onDelete": 'cascade'
        }
    ]
};
}