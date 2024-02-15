import { useFormik } from "formik";
import * as Yup from 'yup'
import './NewsletterForm.css'

function NewsletterForm(){

    const formSubmit = (values) => {
        console.log(values);
    }

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid Email Address').required('Email Address Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            formSubmit(values);
            resetForm();
        }
    });

    return(
        <div className="newsletter_form">
            <form onSubmit={formik.handleSubmit}>
                <p className="email_field">
                    <input type="email" id="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <span className="error">{formik.errors.email}</span> : null}
                </p>
                <p className="btn_field">
                    <input type="submit" name="submit" id="submit" value="Subscribe" />
                </p>
            </form>
        </div>
    )
}

export default NewsletterForm;