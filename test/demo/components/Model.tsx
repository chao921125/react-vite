import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import { useSpring, animated } from "react-spring";

interface FadeProps {
	children?: React.ReactElement;
	in: boolean;
	onEnter?: () => {};
	onExited?: () => {};
}

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "#000000",
	border: "1px solid #00FFFF",
	boxShadow: 0,
	p: 1,
};

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

export default function GModal(props) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(props.open);
	}, [props.open]);

	const onClose = () => {
		props.onClose && props.onClose();
		setOpen(false);
	};

	return (
		<Modal
			aria-labelledby="spring-modal-title"
			aria-describedby="spring-modal-description"
			open={open}
			onClose={onClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
			className="modal-box modal-recharge-confirm-box"
		>
			<Fade in={open}>
				<Box sx={style}>
					<div className="s-flex close-box">
						<img src="./assets/images/icon-modal-close.png" onClick={onClose} />
						<div className="s-flex s-flex-center-row modal-ct-title">{props.title}</div>
						{props.children}
						<div className="modal-recharge-pd modal-order-btn modal-btn-box modal-btn-between">
							<div className="modal-btn modal-btn-half modal-btn-cancel" onClick={onClose}>
								CANCEL
							</div>
							<div className="modal-btn modal-btn-half modal-btn-confirm" onClick={props.onConfirm}>
								CONFIRM
							</div>
						</div>
					</div>
				</Box>
			</Fade>
		</Modal>
	);
}
