// interface Mycar{
//     Carname:string;
//     Carengine:string;
//     Carwheel:string;
//     Cartype:string;

// drive(a:string):string;
// }

// class Honda implements Mycar{
//     constructor(public Carname:string,public Carengine:string, Carwheel:string,public Cartype:string){

//     }
//     drive(a:string):string{
//         return a;
//     }
// }

interface car
{
    make: string;
    model: number;
    year: number;
    color: string;
    transmission: string;
    trim: number | string;
    milage: number;
    ownername:string;
    condition:string;
}

class Suzuki implements car
{

    make: string;
    model: number;
    year: number;
    color: string;
    transmission: string;
    trim: number | string;
    milage: number;
    ownername:string;
    condition:string;

    constructor()
    {
        this.make = "Suzuki";
    }
}   

class Alto extends Suzuki
{
    setValues(a,b,c,d,e,f,g,h)
    {
        this.model = a;
        this.year = b;
        this.color = c;
        this.transmission = d;
        this.trim = e;
        this.milage = f;
        this.ownername = g;
        this.condition = h;
    }
}



var suzuki = new Suzuki();
var alto = new Alto();

alto.setValues("4",2008, "silver" ,"manual","x-large",11223990,"Ali","medium");

console.log("Brand: " + alto.make);
console.log("seter: " + alto.model);
console.log("Year: " + alto.year);
console.log("Color: " + alto.color);
console.log("Transmission: " + alto.transmission);
console.log("Trim: " + alto.trim);
console.log("Milage: " + alto.milage);
console.log("Ownername: " + alto.ownername);
console.log("Condition: " + alto.condition);
