import React, { useRef, useEffect } from 'react';
import './canvas.scss';
import { drawVec2d } from '../draw2d/vector';

export function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current)
            return;

        const canvasWidth = canvasRef.current.clientWidth;
        const canvasHeight = canvasRef.current.clientHeight;
        const ctx = canvasRef.current.getContext('2d');
        
        if (!ctx)
            return;

        ctx.save();
        ctx.translate(canvasWidth/2, canvasHeight/2*1.5);
        
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = 'red';
        // Blue
        drawVec2d(ctx, [ 0, 0 ], [ 50, -50 ], '#00aaff');
        // Green
        drawVec2d(ctx, [ 50, -50 ], [ -70, -40 ], '#00ffaa');
        // Red
        drawVec2d(ctx, [ 0, 0 ], [ -20, -90 ], '#ff0066');

        ctx.restore();
    }, []);

    return (
        <div className="Canvas">
            <canvas width="200" height="200" ref={canvasRef}></canvas>
        </div>
    );
}