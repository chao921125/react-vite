import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import "./index.scss";

const Pagination = forwardRef((props: any, ref) => {
	const [pageOptions, setPageOptions] = useState({
		current: props.current || 1,
		size: props.pageSize || 10,
		sizes: props.pageSizes || [10, 20, 50, 100],
		total: props.total || 1,
	});
	const [pageTotal, setPageTotal] = useState<number[]>([]);
	const [pageMax, setPageMax] = useState(Math.ceil(pageOptions.total / pageOptions.size));

	const pagePre = () => {
		if (pageOptions.current === 1) return false;
		const current = pageOptions.current - 1 || 1;
		setPageOptions({ ...pageOptions, current: current });
		props.handleChange(pageOptions.current);
	};
	const pageNext = () => {
		if (pageOptions.current === pageMax) return false;
		const next = pageOptions.current + 1 > pageMax ? pageMax : pageOptions.current + 1;
		setPageOptions({ ...pageOptions, current: next });
		props.handleChange(pageOptions.current);
	};
	const pageChange = (current) => {
		setPageOptions({ ...pageOptions, current: current });
		props.handleChange(pageOptions.current);
	};

	useImperativeHandle(ref, () => ({
		handleChange: () => {
			return pageOptions.current;
		},
	}));

	useEffect(() => {
		setPageMax(Math.ceil(pageOptions.total / pageOptions.size));
		let totalArr: number[] = [];
		for (let i = 1; i <= pageMax; i++) {
			totalArr.push(i);
		}
		setPageTotal(totalArr);
	}, [props]);
	return (
		<div className="page">
			<div className="page-click page-pre" onClick={pagePre}>
				上一页
			</div>
			{pageTotal &&
				pageTotal.map((item) => {
					return (
						<span
							className={`page-click page-number ${pageOptions.current === item ? "page-number-active" : ""}`}
							key={item}
							onClick={() => pageChange(item)}>
							{item}
						</span>
					);
				})}
			<div className="page-click page-next" onClick={pageNext}>
				下一页
			</div>
		</div>
	);
});
export default Pagination;
