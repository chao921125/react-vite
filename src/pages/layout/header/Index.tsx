import { useTranslation } from "react-i18next";
import { useRecoilState, useSetRecoilState } from "recoil";
import Store from "@/store";
import ThemeConfig from "@/config/themeConfig";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";

export default function HeaderAdmin() {
	// 语言切换
	const [i18nState, setI18nState] = useRecoilState(Store.i18nState);
	const setThemeState = useSetRecoilState(Store.useThemeState);
	const { i18n } = useTranslation();

	const items: MenuProps["items"] = ThemeConfig.i18nKeys;

	const handleMenuClick: MenuProps["onClick"] = (e) => {
		i18n.changeLanguage(e.key);
		setThemeState({ i18n: e.key });
		setI18nState(e.key);
	};

	const menuProps = {
		items,
		onClick: handleMenuClick,
	};
	return (
		<>
			<Dropdown menu={menuProps}>
				<Button>
					<Space>
						{ThemeConfig.i18nEnumKey[i18nState]}
						<DownOutlined />
					</Space>
				</Button>
			</Dropdown>
		</>
	);
}
