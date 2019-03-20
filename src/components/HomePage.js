import React from 'react'
import { Layout } from 'antd'
import Navigation from './Navigation'

const { Header, Footer, Content } = Layout

const HomePage = () => {
    return (
        <Layout>
            <Header>
                <Navigation />
            </Header>
            <Layout>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    )
}

export default HomePage