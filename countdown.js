document.addEventListener('DOMContentLoaded', function() {
    const daysleft = document.getElementById('days');
    const hoursleft = document.getElementById('hours');
    const minutesleft = document.getElementById('minutes');
    const secondsleft = document.getElementById('seconds');

    function UpdateClock() {
        const start = new Date('2023-09-04T15:30:00');
        const now = new Date();

        const differenceInMs = start - now;
        const differenceInS = differenceInMs / 1000;

        const days = Math.floor(differenceInS / (3600 * 24));
        const hours = Math.floor((differenceInS % (3600 * 24)) / 3600);
        const minutes = Math.floor((differenceInS % 3600) / 60);
        const seconds = Math.floor(differenceInS % 60);

        daysleft.innerHTML = days;
        hoursleft.innerHTML = hours;
        minutesleft.innerHTML = minutes;
        secondsleft.innerHTML = seconds;
    }

    setInterval(() => {
        UpdateClock();
    }, 1000);
});
