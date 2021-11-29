import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `    
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong>
            <button (click)="acumular_base(1);" > + 1 </button>

            <span>{{base}}</span>

            <button (click)="acumular_base(-1);"> -1 </button>
        </strong></h3>

        <button (click)="acumular(base);" > + {{ base }} </button>

        <span>El contador es: {{numero}}</span>

        <button (click)="acumular(-base);"> - {{ base }} </button>
    `
})
export class ContadorComponet {
    titulo: string = 'Contador App';
    numero:number = 10;
    base:number = 5;

    acumular (valor:number) {
        this.numero +=valor;    
    }

    acumular_base (valor:number) {
        this.base +=valor;    
    }
}