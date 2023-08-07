import {useNavigate, useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()
    const navigate = useNavigate()

    console.error(error);

    const handleClick = () => {
       navigate("/", { replace: true })
    }

    return (
        <div>
            <h1>ErrorPage</h1>
            <br/>
            <button onClick={handleClick}>Retourner à la page d&apos;accueil</button>
        </div>
    );
}