window.addEventListener('load', function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();

    let points = [];

    c.addEventListener('mousedown', e => {
        console.log(e);
    });
    c.addEventListener('mousemove', e => {
        console.log(e);
    });
});
