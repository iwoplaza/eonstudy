export function drawVec2d(ctx: CanvasRenderingContext2D, point: [ number, number ], vec: [ number, number ], style: string = 'red') {
    const angle = Math.atan2(vec[1], vec[0]) + Math.PI / 2;
    
    ctx.strokeStyle = style;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(...point);
    ctx.lineTo(point[0] + vec[0], point[1] + vec[1]);
    ctx.stroke();

    const tipSize = 7;
    ctx.fillStyle = style;
    ctx.save();
    ctx.translate(point[0] + vec[0], point[1] + vec[1]);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(-tipSize, tipSize * 2);
    ctx.lineTo(0, 0);
    ctx.lineTo(tipSize, tipSize * 2);
    ctx.fill();
    ctx.restore();
}