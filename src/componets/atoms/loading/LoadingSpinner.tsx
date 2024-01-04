import { FC } from 'react';
import './loadingSpinner.scss';

const LoadingSpinner: FC = () => {
    return (
        <div className="content">
            <div className="content__loading-container">
                <div className="content__loading-container__loading-spinner"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
