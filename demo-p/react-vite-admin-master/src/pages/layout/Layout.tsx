import React, { useContext, useReducer, useState } from "react";
import { Router, Route, HashRouter, Link, Switch, useRouteMatch, useHistory } from 'react-router-dom'
import RichText from "../richText/RichText";
import Workplace from "../workplace/Workplace";
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import { MenuClickEventHandler } from "rc-menu/lib/interface";
const { Header, Content, Footer, Sider } = Layout;
import style from './layout.module.less'
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import Echarts from "../echarts/Echarts";
import { StoreContext } from "../../plugins/store/store";
import { UserOutlined } from '@ant-design/icons';


const MyLayout: React.FC<{}> = () => {
    const [collapsed, setCollapsed] = useState(false)
    const history = useHistory()
    const { t } = useTranslation();
    const { store } = useContext(StoreContext)!;
    const onCollapse = (val: boolean) => {
        setCollapsed(val);
    };
    const menuClick: MenuClickEventHandler = ({ key, keyPath, domEvent }) => {
        history.push(key)
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className={style.logo} />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={menuClick}>
                    <Menu.Item key="/admin/workplace" icon={<PieChartOutlined />}>
                        {t('工作台')}
                    </Menu.Item>
                    <Menu.Item key="/admin/rich-text" icon={<DesktopOutlined />}>
                        {t('富文本')}
                    </Menu.Item>
                    <Menu.Item key="/admin/echart" icon={<DesktopOutlined />}>
                        {t('图表')}
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className={style.siteLayout}>
                <Header className={style.siteLayoutBackground} style={{ padding: 0 }} >
                    <div style={{ display: "flex", justifyContent: 'flex-end', paddingRight: '20px' }}>
                        <div className="avatar">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                            <span style={{marginLeft: '10px'}}>{store.user?.name}</span>
                        </div>
                    </div>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Switch>
                            <Route path="/admin/rich-text" component={RichText}></Route>
                            <Route path="/admin/workplace" component={Workplace}></Route>
                            <Route path="/admin/echart" component={Echarts}></Route>
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

export default MyLayout