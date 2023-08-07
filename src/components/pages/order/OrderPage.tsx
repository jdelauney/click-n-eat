

export const OrderPage = () => {
    const handleClick = () => {
        alert("déconnexion")
    }

    return (
        <div>
            Bonjour firstName
            <br/>
            <button onClick={handleClick}>Déconnexion</button>
        </div>
    )
}