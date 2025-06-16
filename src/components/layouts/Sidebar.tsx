import { Layout, Menu } from "antd";
import { sidebarGenerator } from "../../utils/siderbargenerator";
import { adminPaths } from "../../routes/admin.routes";

const { Sider } = Layout;
const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni </h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarGenerator(adminPaths, "student")}
      />
    </Sider>
  );
};

export default Sidebar;
