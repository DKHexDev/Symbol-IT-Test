import { Home, Lost, Error, HttpCode } from './pages/index';

// Toutes les routes disponible dans l'application.
const routes = [
    { path: '*', component: Error },
    { path: '/', component: Home, exact: true },
    { path: '/lost', component: Lost, exact: true },
    { path: '/:httpCode', component: HttpCode, exact: false }
]

export default routes;