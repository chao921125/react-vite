// import { Helmet } from 'react-helmet';
// import { useEffect, useState, useRef } from "react";
// import { Stage, Layer, Rect, Text } from "react-konva";
// import CircularProgress from '@mui/material/CircularProgress'
//
// import Konva from "konva";
// import Zone from './zone'
// import Plan from './plan'
//
// import * as api from '../../libs/api'
// import GModal from "../../components/Model";
//
// function Land() {
//     const minScale = (window.innerWidth - 300) / 2400;
//     const maxScale = 3;
//     const [scale, setScale] = useState(minScale);
//     const [map, setMap] = useState({
//         loading: true,
//         data: [],
//         size: [0, 0]
//     })
//     const [items, setItems] = useState([]);
//     const [point, setPoint] = useState({ x: 0, y: 0 });
//     const [zone, setZone] = useState({
//         loading: true,
//         data: null, info: null
//     });
//
//     const [winSize, setWinSize] = useState({ w: window.innerWidth, h: window.innerHeight });
//
//     const [openBuy, setOpenBuy] = useState(false);
//     const layer = useRef<Konva.Layer>(null);
//     const stage = useRef<Konva.Stage>(null);
//
//     useEffect(() => {
//
//         function handleResize() {
//             setWinSize({ w: window.innerWidth, h: window.innerHeight })
//         }
//
//         window.addEventListener('resize', handleResize);
//
//         genMap();
//         return () => {
//             window.removeEventListener('resize', handleResize)
//         }
//     }, []);
//
//
//     useEffect(() => {
//         layer.current?.height(map.size[1] * 200);
//         layer.current?.width(map.size[0] * 200);
//
//         stage.current?.width(winSize.w - 400);
//         stage.current?.height(winSize.h - 300);
//     }, [map.size, winSize]);
//
//
//     async function genMap() {
//         let data = await api.getMapInfo();
//         if (data) {
//             let size = data.totalArea.split('x')
//
//             let items = generateShapes(parseInt(size[0]), parseInt(size[1]));
//             setItems(items);
//
//             setMap({
//                 ...map, size: [parseInt(size[0]), parseInt(size[1])]
//             })
//
//             await getMapPlanInfo()
//
//         }
//
//     }
//     async function getMapPlanInfo() {
//         let data = await api.getMapPlan(1);
//         if (data && data.rows.length > 0) {
//             setMap({
//                 ...map,
//                 loading: false,
//                 data: data.rows
//             })
//         } else {
//             setMap({
//                 ...map, loading: false
//             })
//         }
//
//     }
//
//
//     function generateShapes(x: number, y: number): any[] {
//         return [...Array(x * y)].map((_, i) => ({
//             id: i,
//             x: (i % x) * 200,
//             y: Math.floor(i / x) * 200,
//             realX: i % x,
//             realY: Math.floor(i / x),
//         }));
//     }
//     return (
//         <div className="bg-hexahero bg-faq">
//             <Helmet>
//                 <title>MetaGaia Metaverse Land</title>
//             </Helmet>
//
//             <div className="wrapper">
//                 <main>
//                     <section className="s-nft s-default">
//                         <img className="img-bg" src="assets/images/nft/img_bg.jpg?v=2022072101" data-anchor-target=".s-nft"
//                             data-top="transform: translateY(0%)"
//                             data-top-bottom="transform: translateY(0%)" />
//                         <div style={{ display: 'flex', borderTop: '2px solid #00ffff', backgroundColor: 'transparent', marginTop: '50px', width: '100%', height: `${winSize.h - 350}px` }}>
//
//                             {
//                                 map.loading && <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center', alignItems: 'center' }}><CircularProgress size={40}
//                                     thickness={4} /></div>
//                             }
//
//                             {!map.loading && <Stage
//                                 ref={stage}
//                                 style={{ marginTop: '50px', marginLeft: '50px', margin: '50px' }}
//                                 onWheel={(e) => {
//                                     e.evt.preventDefault();
//                                 }}
//                             >
//                                 <Layer
//                                     x={0}
//                                     y={0}
//                                     ref={layer}
//                                     draggable={true}
//                                     onWheel={(e) => {
//                                         let newScale = scale - e.evt.deltaY / 1000;
//
//                                         if (newScale > minScale && newScale < maxScale) {
//                                             setScale(newScale);
//                                         } else {
//                                             if (scale < minScale) {
//                                                 setScale(minScale)
//                                             }
//                                         }
//
//                                         e.evt.preventDefault();
//                                     }}
//                                     scaleX={scale}
//                                     scaleY={scale}
//
//                                     onDragEnd={(e) => {
//
//                                         // if (scale <= minScale) {
//                                         //     setPoint({
//                                         //         x: 0,
//                                         //         y: 0,
//                                         //     });
//                                         // } else {
//
//                                         //     // console.log(layer.current.x(),layer.current.y())
//                                         //     // console.log(scale*200*8-window.innerHeight+300)
//                                         //     let mh = window.innerHeight-300-scale*200*8
//                                         //     let mw = window.innerWidth-400-scale*200*11
//                                         //     setPoint({
//                                         //         x: layer.current.x()>0?0:layer.current.x()<mw?mw:layer.current.x(),
//                                         //         y: layer.current.y()>0?0:layer.current.y()<mh?mh:layer.current.y(),
//                                         //     });
//                                         // }
//
//                                         setPoint({
//                                             x:layer.current.x(),
//                                             y:layer.current.y()
//                                         })
//
//
//                                     }}
//                                 >
//
//                                     {items.map((item) => {
//                                         return (
//                                             <Zone
//                                                 map={map.data}
//                                                 key={item.id}
//                                                 name={item.id}
//                                                 x={item.x}
//                                                 y={item.y}
//                                                 realX={item.realX}
//                                                 realY={item.realY}
//                                                 pointX={point.x}
//                                                 pointY={point.y}
//                                                 scale={scale}
//                                                 mapSize={{
//                                                     width: winSize.w - 400,
//                                                     height: winSize.h - 300
//                                                 }}
//                                             />
//                                         );
//                                     })}
//
//                                     {
//                                         map.data.map(m => {
//                                             return <Plan
//                                                 key={`p-${m.id}`}
//                                                 map={m}
//
//                                                 onClick={async imgName => {
//
//                                                     setZone({ ...zone, loading: true })
//                                                     let info = await api.getMapPlanDetail(1, m.id)
//                                                     setZone({
//                                                         loading: false,
//                                                         data: { ...m, imgName, point: { x: m.location[0] * 200, y: m.location[1] * 200 } }, info
//                                                     })
//                                                 }}
//                                             />
//                                         })
//                                     }
//
//
//                                     {
//                                         zone.data && <Rect
//                                             x={zone.data.point.x}
//                                             y={zone.data.point.y}
//                                             width={parseInt(zone.data.size.split('x')[0]) * 200}
//                                             height={parseInt(zone.data.size.split('x')[1]) * 200}
//
//                                             strokeWidth={3}
//                                             stroke="yellow"
//                                             shadowColor={"yellow"}
//                                             shadowBlur={35}
//                                         ></Rect>
//                                     }
//
//                                 </Layer>
//
//                                 {/* <Layer x={20} y={20} width={300} height={200}>
//                                     <Rect
//                                         x={0}
//                                         y={0}
//                                         width={300}
//                                         height={200}
//                                         // shadowColor="black"
//                                         // shadowBlur={3}
//                                         fill="white"
//                                         stroke="#00ffff"
//                                         cornerRadius={5}
//
//                                     />
//                                     <Rect
//                                         x={10 - (point.x * 280 / (2200 * scale))}
//                                         y={10 - (point.y * 180 / (1600 * scale))}
//                                         width={Math.min(280 * minScale / scale, 280)}
//                                         height={180 * minScale / scale}
//                                         stroke="red"
//                                         strokeWidth={3}
//                                     />
//                                 </Layer> */}
//                             </Stage>}
//
//                             {zone.data && (
//                                 <div
//                                     style={{
//                                         height: '100%',
//                                         width: "300px",
//                                         backgroundColor: "black",
//                                         borderLeft: "2px solid #00ffff"
//                                     }}
//                                 >
//                                     {zone.loading && <div><CircularProgress /></div>}
//                                     {!zone.loading && <>
//                                         <img
//                                             src={zone.info?.image || ("/map_slices/" + zone.data.imgName + ".png")}
//                                             width="300px"
//                                             height="300px"
//                                         />
//                                         <div style={{ color: "white" }}>No: {zone.data?.name}</div>
//                                         <div style={{ color: "white" }}>
//                                             Location: {zone.data.location[0]},{zone.data.location[1]}
//                                         </div>
//                                         <div style={{ color: "white" }}>
//                                             Size: {zone.data?.size}
//                                         </div>
//                                         <div style={{ color: "white" }}>
//                                             Price: ${zone.info?.usdPrice}
//                                         </div>
//                                         <div style={{ color: "white" }}>
//                                             Description: {zone.info?.detail}
//                                         </div>
//                                         <div style={{ height: '100px', backgroundColor: 'red' }}>
//                                             <button disabled={zone.data.sellStatus != 1} onClick={_ => {
//                                                 setOpenBuy(true)
//                                             }}>Buy</button>
//                                         </div>
//                                     </>}
//
//
//                                 </div>
//                             )}
//                         </div>
//
//                     </section>
//
//                 </main>
//             </div>
//
//             <div className="s-footer"></div>
//
//             <GModal
//                 open={openBuy}
//                 onClose={_ => {
//                     setOpenBuy(false)
//                 }}
//                 title="CONFIRM ORDER">
//                 <div>Buy Land From METAGAIA</div>
//             </GModal>
//         </div>
//     );
// }
//
// export default Land;
