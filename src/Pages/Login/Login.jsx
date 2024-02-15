import { useFormik } from "formik";
import * as Yup from 'yup'
import PageBanner from "../../Components/PageBanner/PageBanner";
import './Login.css'
import { userLogin } from "../../../utils/api";

function Login(){

    const url = import.meta.env.VITE_REACT_APP_LOGIN_API_URL;

    const formSubmit = (data) => {
        // const fetchAuth = async() => {
        //     const userAuth = await userLogin(url, {
        //         method:'POST',
        //         body:JSON.stringify({
        //             username: data.username,
        //             password: data.password,
        //         })
        //     })
        //     console.log(userAuth);
        // }
        // fetchAuth();
    } 

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            formSubmit(values);
            resetForm();
        },
    });

    return(
        <>
            <PageBanner title="Login" />
            <div className="sec_padding login_sec">
                <div className="container">
                    <div className="login_form">
                        <form onSubmit={formik.handleSubmit}>
                            <p>
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    {...formik.getFieldProps('username')}
                                />
                                {formik.errors.username && formik.touched.username ? <span className="error">{formik.errors.username}</span> : null}
                            </p>
                            <p>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    {...formik.getFieldProps('password')}
                                />
                                {formik.errors.password && formik.touched.password ? <span className="error">{formik.errors.name}</span> : null}
                            </p>
                            <p>
                                <input type="submit" value="Login" name="submit" id="submit" />
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;