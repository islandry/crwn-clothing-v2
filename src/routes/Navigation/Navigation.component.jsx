import {Outlet , Link} from 'react-router-dom';
import './Navigation.style.scss';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
import { signOutUser } from '../../utils/firebase/firebase.component';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';

const Navigation = () =>{
    const { currentUser } = useContext(UserContext);
    //console.log(currentUser);
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
      <>
        <div className = 'navigation'>
            <Link className = 'logo-container' to='/'>
                <CrwnLogo />
            </Link>
            <div className = 'nav-links-container'>
               <Link className = 'nav-link' to='/shop'>
                    SHOP
                </Link> 
                <Link className = 'nav-link' to='/contact'>
                    CONTACT
                </Link>
                {currentUser ? (
                <span className = 'nav-link' onClick = {signOutHandler}>SIGN OUT</span>) : 
                <Link className = 'nav-link' to = '/auth'>
                    SIGN IN
                </Link>}
                <CartIcon /> 
            </div>
            {isCartOpen && <CartDropdown />} 
        </div>
        
        <Outlet />
      </>
    )
};

export default Navigation;