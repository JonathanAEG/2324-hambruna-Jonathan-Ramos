import { fase1 } from "./fase/fase1.js";
import { fase2 } from "./fase/fase2.js";
import { fase3 } from "./fase/fase3.js";
import { fase4 } from "./fase/fase4.js";
import { fase5 } from "./fase/fase5.js";


export default function init(items){

    fase1(items);
    fase2(items);
    fase3(items);
    fase4(items);
    fase5(items);
}