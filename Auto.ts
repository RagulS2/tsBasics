import {Engine}from './engine'
class Auto{
         engine:Engine;
         constructor(engine:Engine){
             this.engine=engine;
             console.log(this.engine)
         }
     }
     class Truck extends Auto{
         fourByFour: boolean;
         constructor(engine:Engine,fourByFour:boolean){
             super(engine);
    
             this.fourByFour=fourByFour;
             console.log(this.engine,fourByFour);
    
         }
     }
     let e=new Engine(300,'mbs');
 let t=new Truck(e,true);