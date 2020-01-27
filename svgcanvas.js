function draw() {
    var canvas = document.getElementById('canvasTest')
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d')
        ctx.fillStyle = 'rgb(200,0,0)'
        ctx.fillRect(10,10,50,50)
        ctx.fillStyle = 'rgba(0,200,0,0.5)'
        ctx.fillRect(20, 20, 40, 40)
        ctx.fillStyle = 'rgba(0,0,200,0.5)'
        ctx.fillRect(30, 30, 30, 30)
        ctx.fillStyle = 'rgba(100,100,100,0.5)'
        ctx.fillRect(40, 40, 20, 20)
        ctx.fillStyle = 'rgba(200,200,200,1)'
        ctx.fillRect(50, 50, 10, 10)
        ctx.beginPath()
        ctx.moveTo(110, 10)
        ctx.lineTo(110, 50)
        ctx.lineTo(150, 10)
        ctx.fill()
        ctx.strokeStyle = '#fff'
        ctx.beginPath();
        ctx.arc(275, 75, 50, 0, Math.PI * 2, true)
        ctx.moveTo(310, 75);
        ctx.arc(275, 75, 35, 0, Math.PI, false)
        ctx.moveTo(265, 65);
        ctx.arc(260, 65, 5, 0, Math.PI * 2, true)
        ctx.moveTo(295, 65);
        ctx.arc(290, 65, 5, 0, Math.PI * 2, true)
        ctx.stroke();
    }
}