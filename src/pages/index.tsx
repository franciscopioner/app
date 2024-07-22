import dynamic from 'next/dynamic';
import { Content, Header } from './styles';

const RemoteHeader = dynamic(() => import('header/header'), { ssr: false });
const RemoteCartPage = dynamic(() => import('cart/cart'), { ssr: false });

const Main: React.FC = () => {
  return (
    <>
      <Header>
        <RemoteHeader />
      </Header>
    <Content>
      <RemoteCartPage />
    </Content>
    </>
  );
};

export default Main;
