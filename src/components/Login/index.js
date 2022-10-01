import { useFormik } from 'formik';




function Login() {

    const [testUsername, testPassword] = ['admin', 123456];//for testing, after connect Redux Toolkit.

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate: values => {
            const errors = {};

            if(!values.username){
                errors.username = "Username is empty";
            }
            if(!values.password || values.password < 4){
                errors.username = "Password wrong.";
            }

            return errors;
        },

        onSubmit: values => {
            if(values.username !== testUsername){
                alert('username wrong')
            }
            else if(values.password !== testPassword){
                alert('password is wrong');
            }
            else{
                alert('login successfully')
                localStorage.setItem('isLogged', )
                // and navigate to dashboard
            }
        }
        
    });

    return(
        
    )


} 