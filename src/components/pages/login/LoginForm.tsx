import {FormEvent} from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const currentForm = event.currentTarget as HTMLFormElement
        const formData = new FormData(currentForm)
        const firstNameValue = formData.get("firstName") as string;
        // Sinon sans le FormData et on evite les deux lignes ci-dessus

        //const firstNameValue: string = currentForm.elements.firstName.value as string
        currentForm.reset()
        navigate(`/order/${firstNameValue}`, { replace: true })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez-vous</h2>
            <input type="text" placeholder="Entrez votre prénom..." id="firstName" name="firstName" aria-label="Identifiant" required/>
            <button type={"submit"}>Accédez à votre espace</button>
        </form>
    )
}