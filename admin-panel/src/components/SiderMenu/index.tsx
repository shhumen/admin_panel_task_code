import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Logo from "../../images/logo-white.svg";
import { Avatar, Layout, Menu } from "antd";
import "./index.less";

const { Sider } = Layout;

export interface ISiderMenuProps {
  path?: any;
  collapsed: boolean;
  onCollapse: any;
  // onCollapse: (collapsed: boolean) => void;
}

const Index = (props: ISiderMenuProps) => {
  const { collapsed, onCollapse } = props;
  return (
    <div>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{ height: "100vh" }}
      >
        <Avatar shape="square" src={Logo} />

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
    </div>
  );
};

export default Index;
