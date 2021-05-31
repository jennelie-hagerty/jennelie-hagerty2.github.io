window.onload = currentdate;

function getCurrentDate() {
    let date = new Date().toDateString();

    document.querySelector('.currentdate').textContent
            = date;
}