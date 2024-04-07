const LoginForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="username">Nombre</label>
                <input type="text" id="username" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <button type="submit">Iniciar sesion</button>
            </form>
        </div>
    )
}
export default LoginForm