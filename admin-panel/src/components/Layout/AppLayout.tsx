import React, { useState } from "react";

import { Layout, theme } from "antd";
import Sider from "../SiderMenu";
import Header from "../Header";

const { Content } = Layout;

const AppLayout = ({ content }: { content: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider collapsed={collapsed} onCollapse={onCollapse} />
      <Layout>
        <Header
          collapsed={collapsed}
          onCollapse={onCollapse}
          colorBgContainer={colorBgContainer}
        />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            // background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
