"use strict";
                
import {TableDefinition, TableContext} from "./types-eah";
export function viviendas(context:TableContext):TableDefinition {
    var esEditable=context.user.rol==='admin';
    return {
    "name": "viviendas",
    editable: esEditable,
    "fields": [
        {
            "name": "operativo",
            "typeName": "text",
            "visible": false,
            "nullable": false
        },
        {
            "name": "vivienda",
            "typeName": "text",
            "nullable": false
        },
        {
            "name": "s1a1_obs",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "total_vis",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "entreav",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "f_realiz_o",
            "typeName": "date",
            "nullable": true
        },
        {
            "name": "confir_tel",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "contacto",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "confirma_dom",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "v1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "total_h",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razonv",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon3",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "vdominio",
            "typeName": "bigint",
            "nullable": true
        },        
        { name: "consistido"    , label:'consistido'            , typeName: 'timestamp'},

    ],
    "sql": {
        "isReferable": true,
        skipEnance: true,
    },
    "primaryKey": [
        "operativo",
        "vivienda"
    ],
    "detailTables": [
        {
            "table": "visitas",
            "fields": [
                "operativo",
                "vivienda"
            ],
            "abr": "v"
        },
        {
            "table": "hogares",
            "fields": [
                "operativo",
                "vivienda"
            ],
            "abr": "h"
        },
/*        
        {
            "table": "visitas_sup",
            "fields": [
                "operativo",
                "vivienda"
            ],
            "abr": "vsup"
        },
        {
            "table": "hogares_sup",
            "fields": [
                "operativo",
                "vivienda"
            ],
            "abr": "hsup"
        }
*/        
    ]
};
}