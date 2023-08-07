import {redirect, useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const handleClick = () => {
        redirect('/')
    }

    return (
        <div>
            <h1>ErrorPage</h1>
            <br/>
            <button onClick={handleClick}>Retourner à la page d&apos;accueil</button>
        </div>
    );
}