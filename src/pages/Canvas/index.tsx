import { useRef } from "react";
import CanvasPolygons, { POLYGON_SIZE, POLYGON_TYPE } from "react-draw-polygons";

export default function Canvas() {
    const canvasRef = useRef();
    const handleUpdate = () => {
        // @ts-ignore
        alert(JSON.stringify(canvasRef.current.onConfirm()))
    };
    const handleDrawRec = () => {
        // @ts-ignore
        canvasRef.current.onDraw({ type: POLYGON_TYPE.rec, size: POLYGON_SIZE.large });
    };

    const handleDrawHex = () => {
        // @ts-ignore
        canvasRef.current.onDraw({ type: POLYGON_TYPE.hex, size: POLYGON_SIZE.normal });
    };

    const handleDrawOct = () => {
        // @ts-ignore
        canvasRef.current.onDraw({ type: POLYGON_TYPE.oct, size: POLYGON_SIZE.small });
    };

    const handleDrawFree = () => {
        // @ts-ignore
        canvasRef.current.toggleDraw();
    };

    return (
        <div>
            <CanvasPolygons ref={canvasRef} canvasHeight={400} canvasWidth={500}>
                <div
                    style={{
                        backgroundImage: 'url("https://picsum.photos/500/400")',
                        backgroundRepeat: "no-repeat",
                        width: "500px",
                        height: "400px",
                    }}
                />
            </CanvasPolygons>
            <button style={{marginRight: "5px"}} onClick={handleDrawRec}>Big Rectangle</button>
            <button style={{marginRight: "5px"}} onClick={handleDrawHex}>Normal Hexagon</button>
            <button style={{marginRight: "5px"}} onClick={handleDrawOct}>Small Octagon</button>
            <button style={{marginRight: "5px"}} onClick={handleDrawFree}>Free Draw</button>
            <button style={{marginRight: "5px"}} onClick={handleUpdate}>Get polygon</button>
        </div>
    );
}