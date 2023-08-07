import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName = "zoom-in-top" | "zoom-in-left" | "zoom-in-bottom" | "zoom-in-right" | "slide-in-top";
type TransitionProps = CSSTransitionProps & {
	animation?: AnimationName;
	wrapper?: boolean;
};
const Transition: React.FC<TransitionProps> = (props) => {
	const { children, classNames, animation, wrapper, ...restProps } = props;

	// @ts-ignore
	return (
		<>
			<CSSTransition classNames={classNames ? classNames : animation} {...restProps}>
				{wrapper ? <div>{children}</div> : children}
			</CSSTransition>
		</>
	);
};

Transition.defaultProps = {
	unmountOnExit: true,
	appear: true,
	animation: "zoom-in-top",
	wrapper: true,
};

export default Transition;
