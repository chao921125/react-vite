import { Button, Form, Input, Tabs } from "antd";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import style from './login.module.less'
import './login.less'
import { useHistory } from "react-router-dom";
import { StoreContext } from "../../plugins/store/store";
const Login: React.FC<{}> = () => {
    const { t } = useTranslation()
    const history = useHistory()
    const { dispatch } = useContext(StoreContext)!
    const onFinish = (values: any) => {
        dispatch({
            type: 'CHANGE_USER',
            user: {
                name: values.username
            }
        })
        history.push('/admin/workplace')
    };

    return (
        <div className={`${style.container} login`}>
            <div className={style.main}>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab={t('账密号登陆')} key="1">
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label={t('用户名')}
                                name="username"
                                rules={[{ required: true, message: t('请输入用户名') }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label={t('密码')}
                                name="password"
                                rules={[{ required: true, message: t('请输入密码') }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    {t('提交')}
                                </Button>
                            </Form.Item>
                        </Form>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={t('手机号登陆')} key="2">
                        自己来实现吧
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Login