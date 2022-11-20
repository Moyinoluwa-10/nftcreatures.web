import { useEffect } from 'react';
// function that loads the app from the top
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export { ScrollToTop };