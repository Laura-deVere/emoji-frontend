const SignUp = () => {
    return (
        <div>
            <form>
                <div>
                    <label>First Name</label>
                    <input />
                </div>
                <div>
                    <label>Last Name</label>
                    <input />
                </div>
                <div>
                    <label>Email</label>
                    <input />
                </div>
                <div>
                    <label>Password</label>
                    <input />
                </div>
                <div>
                    <label>Password Confirmation</label>
                    <input />
                </div>
            </form>
            <div>
                <span>Already have an account?</span>
                <a href="#">Sign In</a>
            </div>
        </div>
    )
}

export default SignUp;