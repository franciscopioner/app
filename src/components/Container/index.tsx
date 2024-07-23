import { ContainerStyled } from './styles';
interface ContainerProps {
    children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    );
};

export default Container;