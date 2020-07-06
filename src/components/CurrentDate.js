// Creating yyyy-mm-dd format date
var date = new Date();
var day = date.toLocaleString("en-us", {
    day: '2-digit'
});
var month = date.toLocaleString("en-us", {
    month: '2-digit'
});
var year = date.toLocaleString("en-us", {
    year: 'numeric'
});

const currentDate = year + "-" + month + "-" + day;

export default currentDate;