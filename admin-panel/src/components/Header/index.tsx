import React from "react";
import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

interface IHeaderProps {
  collapsed: boolean;
  colorBgContainer: any;
  onCollapse: (collapsed: boolean) => void;
}

const { Header } = Layout;

const Index = (props: IHeaderProps) => {
  const { collapsed, colorBgContainer, onCollapse } = props;

  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => onCollapse(collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      </Header>
    </>
  );
};

export default Index;
