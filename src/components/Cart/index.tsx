import dynamic from 'next/dynamic';
import { CartStyled } from './styles';
import Loader from '../Loader';

const RemoteCart = dynamic(() => import('cart/cart'), { 
    ssr: false, 
    loading: () => <Loader /> 
  });

  const Cart: React.FC = () => {
    return (
        <CartStyled>
          <RemoteCart />
        </CartStyled>
    );
  };
  
  export default Cart;