import PageBanner from "../../Components/PageBanner/PageBanner";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './Contact.css';
import { useFormik } from "formik";
import * as Yup from 'yup'

// const validate = values => {
//     const errors = {};
//     if(!values.name){
//         errors.name = 'Required';
//     } else if (values.name.length < 3){
//         errors.name = 'Name must be 3 letters or more';
//     } else if (!values.email){
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//         errors.email = 'Invalid email address';
//     } else if (!values.phone){
//         errors.phone = 'Required';
//     }
//     return errors;
// };

function Contact(){

    const formSubmit = (formdata) =>{
        console.log(formdata)
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        //validate,
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Must be 3 characters')
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            phone: Yup.string()
                .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Invalid phone number')
                .required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            formSubmit(values);
            resetForm();
        },
    });

    return(
        <>
            <PageBanner 
                title="Contact Us"
            />
            <div className="sec_padding contact_sec">
                <div className="container">
                    <div className="contact_content">
                        <div className="contact_list">
                            <h2 className="sec_title">Contact Details</h2>
                            <div className="icon_list">
                                <div className="iconlist_item">
                                    <a href="mailto:example@gmail.com">
                                        <span className="icon"><FaEnvelope /></span>
                                        example@gmail.com
                                    </a>
                                </div>
                                <div className="iconlist_item">
                                    <a href="tel:+919876543210">
                                        <span className="icon"><FaPhoneAlt /></span>
                                        987-654-3210
                                    </a>
                                </div>
                                <div className="iconlist_item">
                                    <a href="#" target="_blank">
                                        <span className="icon"><FaMapMarkerAlt /></span>
                                        Phase 8B Sector 74,<br/>Industrial Area,<br/> Mohali PB 160055
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="contact_form">
                            <form onSubmit={formik.handleSubmit}>
                                <p>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" {...formik.getFieldProps('name')} />
                                    {formik.touched.name && formik.errors.name ? <span className="error">{formik.errors.name}</span> : null}
                                </p>
                                <p>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" {...formik.getFieldProps('email')} />
                                    {formik.touched.email && formik.errors.email ? <span className="error">{formik.errors.email}</span> : null}
                                </p>
                                <p>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" id="phone" {...formik.getFieldProps('phone')} />
                                    {formik.touched.phone && formik.errors.phone ? <span className="error">{formik.errors.phone}</span> : null}
                                </p>
                                <p>
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" onChange={formik.handleChange} value={formik.values.message}></textarea>
                                </p>
                                <p>
                                    <input type="submit" name="submit" id="submit" />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;