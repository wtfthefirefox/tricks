window.addEventListener('DOMContentLoaded', function() {
    let tab             = document.querySelectorAll('.info-header-tab'); //Navigation tabs
    let info            = document.querySelector('.info-header');   //Buttons navigation tabs
    let tabContent      = document.querySelectorAll('.info-tabcontent'); //Tab

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })
});

// class hide = display: none;
// class show = back your display: something;