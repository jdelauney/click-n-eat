import {FormEvent} from "react";

export const LoginForm = () => {
    // const [firstName, setFirstName] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const currentForm = event.currentTarget as HTMLFormElement
        const formData = new FormData(currentForm)
        const firstNameValue = formData.get("firstName") as string;
        currentForm.reset()
        alert(firstNameValue);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous ?</h1>
            <h2>Connectez-vous</h2>
            <input type="text" placeholder="Entrez votre prénom..." id="firstName" name="firstName" aria-label="Identifiant" required/>
            <button type={"submit"}>Accédez à votre espace</button>
        </form>
    )
}