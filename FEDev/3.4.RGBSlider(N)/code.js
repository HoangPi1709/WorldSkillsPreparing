let arrCtl = document.querySelectorAll('.ctl');
    let rgb = document.querySelector('.rgb');
    let screen = document.querySelector('.screen');
    
    let value  = `rgb(128,128,128)`;
    rgb.innerHTML = value;
    document.querySelector(".control").addEventListener("change", function () {
        value = `rgb(${arrCtl[0].value},${arrCtl[1].value},${arrCtl[2].value})`;
        screen.style.backgroundColor = value;
        rgb.innerHTML = value;
    });