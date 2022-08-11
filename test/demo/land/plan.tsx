// import { useState, useEffect, useRef } from "react";
// import { Rect, Text, Image } from "react-konva";
//
//
// export default function Plan(props) {
//
//
//     const getName = () => {
//         return (
//             ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"][props.map.location[0]] +
//             ["1", "2", "3", "4", "5", "6", "7", "8"][props.map.location[1]]
//         );
//     };
//
//     return <><Rect
//         x={props.map.location[0] * 200}
//         y={props.map.location[1] * 200}
//         width={parseInt(props.map.size.split('x')[0]) * 200}
//         height={parseInt(props.map.size.split('x')[1]) * 200}
//         // fill={'red'}
//         stroke={"green"}
//         strokeWidth={3.5}
//         shadowColor={"yellow"}
//         shadowBlur={35}
//         onClick={_=>{
//             props.onClick && props.onClick(getName())
//         }}
//     />
//         <Text
//
//             fontSize={28}
//             fill={"red"}
//             x={props.map.location[0] * 200 + 25}
//             y={props.map.location[1] * 200 + 25}
//             text={props.map.name}
//         /></>
//
// }
//
//
