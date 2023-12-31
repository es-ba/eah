"use strict";

import * as dmencu from "./types-eah";
import * as miniTools from "mini-tools";
import {Context, MenuInfoBase, Request, Response, OptsClientPage, TableDefinition, 
        TableContext, MenuInfo, MenuDefinition, MenuInfoWScreen } from "./types-eah";
import {defConfig} from "./def-config"
import {procedures} from "./procedures-eah"


/* tablas ua */
import { viviendas           } from './table-viviendas';
import { visitas             } from './table-visitas';
import { hogares             } from './table-hogares';
import { personas            } from './table-personas';
//import { visitas_sup         } from './table-visitas_sup';
//import { hogares_sup         } from './table-hogares_sup';
//import { personas_sup        } from './table-personas_sup';

const APP_DM_VERSION="#23-10-12b";

export type Constructor<T> = new(...args: any[]) => T;
export function emergeAppEah<T extends Constructor<dmencu.AppAppDmEncuType>>(Base:T){
  return class AppEah extends Base{
    constructor(...args:any[]){ 
        super(args);
    }
    
    configStaticConfig(){
        super.configStaticConfig();
        this.setStaticConfig(defConfig);
    }

    async getProcedures(){
        var parentProc = await super.getProcedures()
        return parentProc.concat(procedures);
    }

    addSchrödingerServices(mainApp:dmencu.Express, baseUrl:string){
        let be=this;
        super.addSchrödingerServices(mainApp, baseUrl);
        //permito levantar mis imagenes en aplicaciones dependientes
        //be.app.use('/img', express.static('node_modules/dmencu/dist/unlogged/unlogged/img'))
    }
    clientIncludes(req:Request, hideBEPlusInclusions:OptsClientPage){
        return super.clientIncludes(req, hideBEPlusInclusions).concat([
            { type: 'js', src: 'client/eah.js' },
            { type: 'js', src: 'my-bypass-formulario.js' },
            { type: 'js', src: 'my-render-formulario.js' },
        ])
    }
    createResourcesForCacheJson(parameters:Record<string,any>){
        var be = this;
        var jsonResult:any = super.createResourcesForCacheJson(parameters);
        jsonResult.version = APP_DM_VERSION;
        jsonResult.appName = 'eah';
        jsonResult.cache=jsonResult.cache.concat([
            "my-render-formulario.js",
            'my-bypass-formulario.js',
        ])
        return jsonResult
    }
    getColorsJson(sufijo:'_test'|'_capa'|''){
        let miSufijo: '_prod'|'_test'|'_capa' = sufijo || '_prod';
        let coloresEntornos = {
            "_prod":"#067DB5",
            "_test":"#C47208",
            "_capa":"#880996",
        }
        return {
            "start_url": "../campo",
            "display": "standalone",
            "theme_color": "#3F51B5",
            "background_color": coloresEntornos[miSufijo]
        }
    }
  
    override getMenuControles(context:Context){
       var menuControles =super.getMenuControles(context);
       //menuControles.push( {menuType:'table', name:'control por dias de carga', table: 'control_dias_carga'}); //aqui van controles especificos de cada operativo 
       //console.log('longitud ',menuControles.length)
       return menuControles
    }
    /*
    override getMenuLimpieza(context:Context){
        var menuLimpieza =super.getMenuLimpieza(context);
        menuLimpieza.push( {menuType:'proc', name:'Eliminar_Individual', proc: 'limpiar_individual'});
        return menuLimpieza
     }
    */
    getMenu(context:Context){
        return super.getMenu(context);
    }
    prepareGetTables(){
        var be=this;
        super.prepareGetTables();
        this.getTableDefinition={
            ...this.getTableDefinition,
            viviendas,
            visitas,
            hogares,
            personas,
            //visitas_sup,
            //hogares_sup,
            //personas_sup,
        }
        be.appendToTableDefinition('tem',function(tableDef:TableDefinition, _context?:TableContext){
            tableDef.hiddenColumns=tableDef.hiddenColumns?.filter(element => element !='semana');
           // console.log('camposhidden', tableDef.hiddenColumns )
            tableDef.fields.find((field)=>field.name=='semana')!.visible=true;
        });
        be.appendToTableDefinition('tareas_tem',function(tableDef:TableDefinition, _context?:TableContext){
            tableDef.hiddenColumns=tableDef.hiddenColumns?.filter(element => element !='semana');
           // console.log('camposhidden', tableDef.hiddenColumns )
            tableDef.fields.push(
                {name:'semana'               , typeName:'integer' , editable: false, inTable: false },
            );
            tableDef.sql!.from = tableDef.sql!.from!.replace(
                'select tt.tarea, t.operativo, t.enc, t.area',
                'select tt.tarea, t.operativo, t.enc, t.area, t.semana '
            );
        })
        be.appendToTableDefinition('tareas_tem_ingreso',function(tableDef:TableDefinition, _context?:TableContext){
            tableDef.sql!.from = tableDef.sql!.from!.replace(
                "'__implementar_en_operativo_final'",
                `(select string_agg(case when concat_ws(';',tel1, tel2, tel_ms) = '' then null else concat_ws(';',tel1, tel2, tel_ms) end,';') 
                    from hogares h 
                    left join personas p on h.operativo = p.operativo and h.vivienda=p.vivienda and h.hogar=p.hogar and h.cr_num_miembro=p.persona
                    where t.operativo = h.operativo and t.enc=h.vivienda --and tt.tarea=t.tarea_actual
                    group by t.enc	
                )`
            );
        })
        be.appendToTableDefinition('inconsistencias',function(tableDef:TableDefinition, context?:TableContext){
            tableDef.sql={...tableDef.sql, isTable:true};
            tableDef.editable=tableDef.editable || context?.puede?.encuestas.justificar;
            //agregar campo renglon, pk agregada de actividades
            tableDef.fields.splice(5,0,
                {name:'renglon'     , typeName:'bigint'   , editable: false},
            );
            tableDef.fields.forEach(function(field){
                if(field.name=='pk_integrada'){
                    field.visible=false;
                }
                if(field.name=='justificacion'){
                    field.editable=context?.forDump || context?.puede?.encuestas.justificar;
                }
            })
        })
        be.appendToTableDefinition('areas', function(tableDef){
            tableDef.selfRefresh = true;
            tableDef.refrescable = true;
        });
    }
  }
}
