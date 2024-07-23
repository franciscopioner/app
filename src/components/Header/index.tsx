import dynamic from 'next/dynamic';
import { HeaderStyled } from './styles';
import Loader from '../Loader';

const RemoteHeader = dynamic(() => import('header/header'), { 
    ssr: false, 
    loading: () => <Loader /> 
  });

  const Header: React.FC = () => {
    return (
        <HeaderStyled>
          <RemoteHeader />
        </HeaderStyled>
    );
  };
  
  export default Header;