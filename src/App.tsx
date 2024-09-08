import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import './App.css'

type MenuItem = Required<MenuProps>['items'][number];

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#333',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #e3e3e3'
};

const contentStyle: React.CSSProperties = {
  // textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};

const siderStyle: React.CSSProperties = {
  // width: 256,
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
  borderRight: '1px solid #e3e3e3'
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#fff',
  borderTop: '1px solid #e3e3e3'
};

const layoutStyle = {
  // borderRadius: 8,
  height: '100%',
  overflow: 'hidden',
  // width: 'calc(50% - 8px)',
  // maxWidth: 'calc(50% - 8px)',
};

const items: MenuItem[] = [
  {
    key: 'home',
    label: 'home',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'search',
    label: 'search',
    icon: <MailOutlined />,
  },
  {
    key: 'todo',
    label: 'todo',
    icon: <SettingOutlined />
  }
];

function App() {

  const navigate = useNavigate();

  const [title, setTitle] = useState('home');

  const clickMenu: MenuProps['onClick'] = (e) => {
    const { key } = e;
    switch(key) {
      case 'home':
        navigate('')
        setTitle('home');
        break;
      case 'search':
        navigate('search')
        setTitle('search');
        break;
      case 'todo':
        navigate('todo')
        setTitle('todo');
        break;
      default:
        break;
    }
  }

  return (
    <>
     <Layout style={layoutStyle}>
      <Sider style={siderStyle}>
        <Menu 
          mode="inline"
          items={items} 
          onClick={clickMenu}
          />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <h2>{title}</h2>
        </Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
    </>
  )
}

export default App
