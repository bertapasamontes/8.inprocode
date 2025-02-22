import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core'; // useful for typechecking

//plugins de FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


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
        dateClick: (arg) => this.handleDateClick(arg),
        events: [
            { title: 'Meeting', start: new Date() }
          ],
        weekends: false // initial value
    };
    // eventsPromise?: Promise<EventInput[]>;

    
    handleDateClick(arg:any) {
        alert('date click! ' + arg.dateStr)
    }
    toggleWeekends() {
        this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
    }

    someMethod() {
        let calendarApi = this.calendarComponent.getApi();
        calendarApi.next();
      }
}
