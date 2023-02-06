import { Button, Result } from 'antd';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

const NoFoundPage: FC = () => {
  const nav = useNavigate();
  const toHome = () => {
    nav('/');
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="页面不存在"
      extra={
        <Button type="primary" onClick={toHome}>
          返回首页
        </Button>
      }
    />
  );
};

export default memo(NoFoundPage);
