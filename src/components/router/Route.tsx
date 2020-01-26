import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';

export interface RouteProps {
    page: string
    component: JSX.Element
}

export function Route({page, component}: RouteProps) {
    const currentPage = useSelector((state: RootState) => state.page);

    if (page == null || currentPage == null) {
        return page === currentPage ? component : null;
    }

    let showRoute = false;
    if (page.endsWith('*')) {
        showRoute = currentPage.startsWith(page.substr(0, page.length - 1));
    } else if (page.startsWith('*')) {
        showRoute = currentPage.endsWith(page.substr(1));
    } else {
        showRoute = page === currentPage;
    }
    return showRoute ? component : null;
}