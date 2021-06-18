import { Layout, Breadcrumb } from 'antd';

const {Sider, Header, Content} = Layout

export default function Index() {
  // const [collapsed, setcollapsed] = useState(false);
  return (
    <Layout>
      <Header></Header>
      <Layout>
        <Sider>
        </Sider>
        <Layout>
          <Breadcrumb></Breadcrumb>
          <Content></Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
