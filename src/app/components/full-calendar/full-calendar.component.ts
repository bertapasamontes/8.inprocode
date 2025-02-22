import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core'; // useful for typechecking

//plugins de FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es'

@Component({
    selector: 'app-full-calendar',
    imports: [FullCalendarModule, CommonModule],
    templateUrl: './full-calendar.component.html',
    styleUrl: './full-calendar.component.scss'
})
export class FullCalendarComponent {

    @ViewChild('calendario') calendarComponent?: FullCalendarComponent;


    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin, interactionPlugin],
        events:[],
        locale: esLocale,
        weekends: true, // findes visibles
    };
    toggleWeekends() {
        this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
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
