import loader from '../../assets/img/gradient-loader.webp';

export default function LoadingElement() {
    return (
        <div className="loading">
            <img className="loading-screen" src={loader} width="100" height="100" alt="loading gif" />
        </div>
    )
}