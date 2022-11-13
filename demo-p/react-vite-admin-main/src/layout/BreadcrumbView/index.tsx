import useSliderModel from '@/models/useSliderModel';
import { routesObject } from '@/routers';
import { Breadcrumb } from 'antd';
import { memo } from 'react';
import { Link } from 'react-router-dom';
export type BreadConfig = {
  title: string;
  url?: string;
  path?: string;
};
const BreadcrumbView = () => {
  const { paths } = useSliderModel();
  return (
    <Breadcrumb className="flex items-center">
      {paths.map((path, index) => {
        const isHover = index !== paths.length - 1;
        const router = routesObject[path];
        const url = router.path;
        const title = router.meta?.title;
        return (
          <Breadcrumb.Item key={`${title}_${url}`}>
            {url && isHover ? <Link to={url}>{title}</Link> : title}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};
export default memo(BreadcrumbView);
