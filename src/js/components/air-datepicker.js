import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('#my-datepicker', {
  classes: 'custom-datepicker',
  dateFormat: 'dd.MM.yyyy',
  position: 'right bottom',
  // inline: true, // всегда показываем - для стилизации
  navTitles: {
    days: 'MMMM yyyy'  // формат без запятой
  }
})
