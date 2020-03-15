window.addEventListener('DOMContentLoaded', function() {
    //Timer 

    let deadline = '2020-03-17'; //date

    function getTimeRemaining(endtime) {
        let t       = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours   = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function setClock(id, endtime) {                            //id clock
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');              //id hours
        let minutes = timer.querySelector('.minutes');          //id minutes
        let seconds = timer.querySelector('.seconds');          //id seconds
        let timeInterval = setInterval(updateClock, 1000);      //timer

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            
            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            }
            
            if (t.total <= 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            } 
        }
    }

    setClock('timer', deadline); 

    //Reverse Timer
    /*
    let deadline = '2010-03-17';

    function getTimeRemaining(endtime) {
        let t       = Date.parse(new Date()) - Date.parse(endtime);
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours   = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            
            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            }
            
            if (t.total <= 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            } 
        }
    }

    setClock('timer', deadline);
    */
});