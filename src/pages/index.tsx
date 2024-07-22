import dynamic from 'next/dynamic';
import { Cart, Header, Footer, PageWrapper } from './styles';

const RemoteHeader = dynamic(() => import('header/header'), { ssr: false });
const RemoteCartPage = dynamic(() => import('cart/cart'), { ssr: false });
const RemoteFooter = dynamic(() => import('footer/footer'), { ssr: false });

const Main: React.FC = () => {
  return (
    <PageWrapper>
      <Header>
        <RemoteHeader />
      </Header>
      <Footer>
        <RemoteFooter />
      </Footer>
      <Cart>
      <RemoteCartPage />
    </Cart>
    </PageWrapper>
  );
};

export default Main;
