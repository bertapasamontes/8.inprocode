import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core'; // useful for typechecking

//plugins de FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es'
import { AddEditEventComponent } from './add-edit-event/edit-event.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-full-calendar',
    imports: [FullCalendarModule, CommonModule, MatIcon],
    templateUrl: './full-calendar.component.html',
    styleUrl: './full-calendar.component.scss'
})
export class FullCalendarComponent {

    constructor(
        private _matDialog: MatDialog,
    ){

    }
    @ViewChild('calendario') calendarComponent?: FullCalendarComponent;


    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin, interactionPlugin],
        events:[],
        locale: esLocale,
        weekends: true, // findes visibles
        eventClick: this.abrirEditEvent.bind(this)
    };
    toggleWeekends() {
        this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
    }

    abrirEditEvent(info:any):void{
        const dialogo = this._matDialog.open(AddEditEventComponent, {
            width: '900px',
            data: {
            id: info.id,
            // info: this.usuariosEnMichi.findIndex()
            // name: this.usuariosEnMichi[0].name
            }
        });

        dialogo.afterClosed().subscribe((result)=>{
            console.log('dialogo cerrado');
            if(result){
            console.log("va bieeen");
            // this.getListUsers();
            }else{
            console.log('somethign is wrong')
            }
        })
    }
    abrirAddEvent():void{
        const dialogo = this._matDialog.open(AddEditEventComponent, {
            width: '900px',
            data: {
            // id: info.id,
            // info: this.usuariosEnMichi.findIndex()
            // name: this.usuariosEnMichi[0].name
            }
        });

        dialogo.afterClosed().subscribe((result)=>{
            console.log('dialogo cerrado');
            if(result){
            console.log("va bieeen");
            // this.getListUsers();
            }else{
            console.log('somethign is wrong')
            }
        })
    }

    addEvent(){
        this.abrirAddEvent();
    }

    ngOnInit() {
        this.calendarOptions.events=[
            {
                 id: '1', 
                 title: 'Evento 1', 
                 date: new Date(),
                 description: "Evento 1"
            },
            { 
                id: '2', 
                 title: 'Evento 2', 
                 date: new Date(new Date().getTime()+86400000), //coge la fecha de hoy y sumale un dia
                 description: "Evento 2"
            },
            { 
                id: '2', 
                 title: 'Evento 3', 
                 start: new Date(new Date().getTime()+86400000), //coge la fecha de hoy y sumale un dia
                 end: new Date(new Date().getTime()+86400000*2),
                 description: "Evento 2"
            }
        ]
        console.log("eventos impresos");
    }


}
