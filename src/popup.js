import * as mruUtils from "./mruUtils";
import { encode, decode } from "@msgpack/msgpack";

var encodedObject;
function exportTabs(){
    console.log("123");
    console.log(
        decode(encodedObject)
        );
    }
    
    
function importTabs(){
    console.log("323");
    encodedObject = encode(mruUtils.getMapping()); 
    console.log(encodedObject);
}

document.getElementById("export").onclick = exportTabs;
document.getElementById("import").onclick = importTabs;