// import { useState, useEffect, useRef } from "react";
// import { Image, Rect } from "react-konva";
//
//
// export default function Zone(props: any) {
//     const [zone, setZone] = useState(false);
//     const [image, setImage] = useState(null);
//     const [active, setActive] = useState(false);
//
//     // useEffect(() => {
//     //     props.map.forEach(m=>{
//     //         let rel = isPtInPoly(props.realX,props.realY,m.poly)
//     //         if (rel) {
//     //             setActive(true);
//     //         }
//     //     })
//
//     // }, [props.map])
//
//     useEffect(() => {
//         let z = inZone();
//         if (!zone && z && image == null) {
//             loadImage();
//         }
//         setZone(z);
//     }, [props.pointX, props.pointY, props.scale]);
//
//     const getName = () => {
//         return (
//             ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"][props.realX] +
//             ["1", "2", "3", "4", "5", "6", "7", "8"][props.realY]
//         );
//     };
//     function loadImage() {
//         var img = document.createElement("img");
//
//         function onload() {
//             // @ts-ignore
//             setImage(img);
//         }
//         img.addEventListener("load", onload);
//         img.src = "/map_slices/" + getName() + ".png";
//     }
//
//     const inZone = () => {
//         let p1 = { x: -props.pointX, y: -props.pointY };
//         let p2 = {
//             x: props.mapSize.width / props.scale - props.pointX,
//             y: -props.pointY,
//         };
//         let p3 = {
//             x: props.mapSize.width / props.scale - props.pointX,
//             y: props.mapSize.height / props.scale - props.pointY,
//         };
//         let p4 = {
//             x: -props.pointX,
//             y: props.mapSize.height / props.scale - props.pointY,
//         };
//
//         return (
//             isPtInPoly(props.x, props.y, [p1, p2, p3, p4]) ||
//             isPtInPoly(props.x + 200 * props.scale, props.y, [p1, p2, p3, p4]) ||
//             isPtInPoly(props.x + 200 * props.scale, props.y + 200 * props.scale, [
//                 p1,
//                 p2,
//                 p3,
//                 p4,
//             ]) ||
//             isPtInPoly(props.x, props.y + 200 * props.scale, [p1, p2, p3, p4])
//         );
//     };
//
//     function isPtInPoly(x: any, y: any, poly: any): boolean {
//         var iSum = 0,
//             iCount;
//         var dLon1, dLon2, dLat1, dLat2, dLon;
//         if (poly.length < 3) {
//             return false;
//         }
//         iCount = poly.length;
//         for (var i = 0; i < iCount; i++) {
//             if (i == iCount - 1) {
//                 dLon1 = poly[i].x;
//                 dLat1 = poly[i].y;
//                 dLon2 = poly[0].x;
//                 dLat2 = poly[0].y;
//             } else {
//                 dLon1 = poly[i].x;
//                 dLat1 = poly[i].y;
//                 dLon2 = poly[i + 1].x;
//                 dLat2 = poly[i + 1].y;
//             }
//             //以下语句判断A点是否在边的两端点的水平平行线之间，在则可能有交点，开始判断交点是否在左射线上
//             if ((y >= dLat1 && y < dLat2) || (y >= dLat2 && y < dLat1)) {
//                 if (Math.abs(dLat1 - dLat2) > 0) {
//                     //得到 A点向左射线与边的交点的x坐标：
//                     dLon = dLon1 - ((dLon1 - dLon2) * (dLat1 - y)) / (dLat1 - dLat2);
//                     if (dLon < x) iSum++;
//                 }
//             }
//         }
//         if (iSum % 2 != 0) {
//             return true;
//         }
//         return false;
//     }
//     return (
//         <>
//
//
//             <Image
//                 image={image}
//                 x={props.x}
//                 y={props.y}
//                 width={200}
//                 height={200}
//                 shadowColor={"white"}
//                 shadowBlur={2}
//             />
//
//             {/* {
//                 !active && <Rect
//                     x={props.x}
//                     y={props.y}
//                     width={201}
//                     height={201}
//                     fill={'rgba(0, 0, 0, 0.3)'}
//                 >
//                 </Rect>
//             } */}
//
//
//         </>
//
//     );
// }
