import dynamic from 'next/dynamic';
import { FooterStyled } from './styles';
import Loader from '../Loader';

const RemoteFooter = dynamic(() => import('footer/footer'), { 
    ssr: false, 
    loading: () => <Loader /> 
  });

  const Footer: React.FC = () => {
    return (
        <FooterStyled>
          <RemoteFooter />
        </FooterStyled>
    );
  };
  
  export default Footer;