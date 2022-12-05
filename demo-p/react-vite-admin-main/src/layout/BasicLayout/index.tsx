import useSliderModel from '@/models/useSliderModel';
import { Layout } from 'antd';
import { FC, memo } from 'react';
import { useOutlet } from 'react-router-dom';
import LogoView from '../LogoView';
import Nav from '../Nav';
import SliderView from '../SliderView';
const { Sider, Content } = Layout;
const BasicLayout: FC = () => {
  const { collapsed } = useSliderModel();
  const page = useOutlet();
  return (
    <Layout className="w-[100vw] h-[100vh]">
      <Sider theme="light" collapsed={collapsed}>
        <LogoView />
        <SliderView />
      </Sider>
      <Layout>
        <Nav />
        <Content>{page}</Content>
      </Layout>
    </Layout>
  );
};
export default memo(() => (
  <useSliderModel.Provider>
    <BasicLayout />
  </useSliderModel.Provider>
));
