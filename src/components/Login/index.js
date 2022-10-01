import { useFormik } from 'formik';




export default function Login() {

    const [testUsername, testPassword] = ['admin', 123456];//for testing, after connect Redux Toolkit.

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate: values => {
            const errors = {};

            if (!values.username) {
                errors.username = "Username is empty";
            }
            if (!values.password || values.password <= 4) {
                errors.password = "Password wrong.";
            }

            return errors;
        },

        onSubmit: values => {
            if (values.username !== testUsername) {
                alert('username wrong')
            }
            else if (values.password !== testPassword) {
                alert('password is wrong');
            }
            else {
                alert('login successfully')
                localStorage.setItem('isLogged',)
                // and navigate to dashboard
            }
        }

    });

    return (
        <form onSubmit={formik.handleSubmit} style={{ margin: 200 }}>
            <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} />
            <span title='username'>{formik.errors.username && formik.errors.username}</span>
            <br />
            <input type="text" name="password" value={formik.values.password} onChange={formik.handleChange} />
            <span>{formik.errors.password && formik.errors.password}</span>
            <br />
            <button type='submit'>Login</button>
        </form>
    )
} 