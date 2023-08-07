import {useNavigate, useParams} from 'react-router-dom';


export const OrderPage = () => {

    const {userName} = useParams()
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/`, {replace: true})
    }

    return (
        <div>
            <h1>Bonjour {userName}</h1>
            <br/>
            <button onClick={handleClick}>Déconnexion</button>
        </div>
    )
}