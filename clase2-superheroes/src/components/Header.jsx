import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import header from '../styles/header.module.css'

const Header = () => {

    const { Header} = Layout;

    const items = [
    {
      key: 'home',
      label: <Link to='/'>Home</Link>,
    },
    {
      key: 'dc',
      label: <Link to='/dc'>DC</Link>,
    },
    {
      key: 'marvel',
      label: <Link to='/marvel'>Marvel</Link>,
    },    
    {
      key: 'search',
      label: <Link to='/search-page'>Search</Link>,
    },
]


  return (

    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#e4441c'
        }}
      >
        <div className="demo-logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
          className={header.customMenu}
        />
      </Header>
    </Layout>

  )
}

export default Header