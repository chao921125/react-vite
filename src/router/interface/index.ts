import React from "react";

export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}

export interface RouteObject {
	path?: string;
	element?: React.ReactNode;
	index?: boolean;
	meta?: MetaProps;
	caseSensitive?: boolean;
	isLink?: string;
	children?: RouteObject[];
}
