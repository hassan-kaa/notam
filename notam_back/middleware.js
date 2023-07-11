function formatDate(inputDate) {
    // Create a new Date object from the input date string
    const date = new Date(inputDate);
  
    // Extract the year, month, day, hour, and minute components from the Date object
    const year = date.getFullYear() - 2000;
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
  
    // Pad the year, month, day, hour, and minute components with leading zeros
    const formattedYear = ('0' + year).slice(-2);
    const formattedMonth = ('0' + month).slice(-2);
    const formattedDay = ('0' + day).slice(-2);
    const formattedHour = ('0' + hour).slice(-2);
    const formattedMinute = ('0' + minute).slice(-2);
    const formattedNumber = Number(`${formattedYear}${formattedMonth}${formattedDay}${formattedHour}${formattedMinute}`);

    // Concatenate the formatted components into a single string and return it
    return formattedNumber ;
  }
module.exports = formatDate ;   