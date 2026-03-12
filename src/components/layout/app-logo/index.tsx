import { standalone_routes } from '@/components/shared';
import { useDevice } from '@deriv-com/ui';
import './app-logo.scss';

export const AppLogo = () => {
    const { isDesktop } = useDevice();

    if (!isDesktop) return null;
    return (
        <a
            href='https://www.mozaictradinghub.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='app-header__logo unknown-traders-logo'
        >
            <span className='unknown-traders-text'>UNKNOWN TRADERS</span>
        </a>
    );
};
