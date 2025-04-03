import { error } from "console";

function isEven(element: number) {

    if (typeof element !== "number"){
        throw new Error ("Erreur");
    } else {
        return element %2 === 0;
    }
    
}
   
export default isEven;
