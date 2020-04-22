window.addEventListener('load', function() {
    var c = document.getElementById("myCanvas");
    var slider = document.getElementById("myRange");
    var ctx = c.getContext("2d");

    let points = [];
    let sampleRate = 100;
    let toggle = false;

    function draw() {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();
        let start = points[0];
        ctx.moveTo(start.x,start.y);
        points.slice(1).forEach(p => {
            if (Math.random()*100 > sampleRate) {
                return;
            }
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
            ctx.moveTo(p.x, p.y);
        });
    }

    c.addEventListener('mousedown', e => {
        points = [{x: e.clientX, y: e.clientY}];
    });
    c.addEventListener('mouseup', e => {
        draw();
    });
    c.addEventListener('mousemove', e => {
        if (e.buttons === 1) {
            points.push({x: e.clientX, y: e.clientY});
        }
    });

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        sampleRate = this.value;
        draw();
    }
});
