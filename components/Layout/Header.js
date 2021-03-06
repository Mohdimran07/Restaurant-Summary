import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assest/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious Food' />
            </div>
        </Fragment>
    )
}

export default Header;