import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

const Formik = () => {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
            validationSchema:yup.object({
                firstname:yup.string().required("This is field is rquired").min(5).max(6),
                lastname:yup.string().required("This is field is rquired").min(5).max(6),
                email:yup.string().required("email is required")
                
            })
    })

    return (
        <div>

            <>

                <form onSubmit={formik.handleSubmit} className="flex items-center justify-center flex-col my-10">


                    <h1 className='text-center mb-3'>Student Portal</h1>
                    <input type="text" name='firstname' placeholder="First Name" className='rounded-md p-3 border-red-200 border my-3 w-80'
                        onChange={formik.handleChange} />
                        <span>{formik.errors.firstname}</span>
                    <input type="text" name='lastname' placeholder="Last Name" className='rounded-md p-3 border-red-200 border my-3 w-80'
                     onChange={formik.handleChange} />
                     <span>{formik.errors.lastname}</span>
                    <input type="text" name='email' placeholder="Email" className='rounded-md p-3 border-red-200 border my-3 w-80'
                     onChange={formik.handleChange} />
                     <span>{formik.errors.email}</span>
                    <input type="text" name='password' placeholder="Password" className='rounded-md p-3 border-red-200 border my-3 w-80'
                     onChange={formik.handleChange} />
                     <span>{formik.errors.password}</span>

                    <button type='submit' className='bg-green' >Sign up</button>


                </form>
            </>
        </div>
    )
}

export default Formik