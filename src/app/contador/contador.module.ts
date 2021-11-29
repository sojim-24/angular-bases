import { NgModule } from "@angular/core";
import { ContadorComponet } from './cotador/contador.componet';

@NgModule({
    declarations: [
        ContadorComponet        
    ],
    exports: [
        ContadorComponet
    ]    
})
export class ContadorModule {}