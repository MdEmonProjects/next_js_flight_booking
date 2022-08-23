import React from 'react';
import DatePickers from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
function DatePicker() {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePickers
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      dateFormat="dd/MM/yyyy"
      showDisabledMonthNavigation
    />
  );
}

export default DatePicker