// The date and time format (%c), date format (%x) and time format (%X).
var d3_time_formatDateTime = "%a %b %e %X %Y",
    d3_time_formatDate = "%m/%d/%Y",
    d3_time_formatTime = "%H:%M:%S";

// The weekday and month names.
var d3_time_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    d3_time_dayAbbreviations = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    d3_time_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    d3_time_monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


exports._formatDateTime = d3_time_formatDateTime;
exports._formatDate = d3_time_formatDate;
exports._formatTime = d3_time_formatTime;
exports._days = d3_time_days;
exports._dayAbbreviations = d3_time_dayAbbreviations;
exports._months = d3_time_months;
exports._monthAbbreviations = d3_time_monthAbbreviations;
