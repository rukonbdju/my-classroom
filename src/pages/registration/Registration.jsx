import React from 'react';
import register from '../../assets/login.png'
import { Link } from 'react-router-dom';
const Registration = () => {
    return (
        <div className='w-11/12 m-auto'>
            <h1 className="text-5xl text-center font-bold my-10">Welcome To Classroom!</h1>
            <section className='grid grid-cols-2 gap-2 items-center justify-items-center'>
                <div>
                    <img className='' src={register} alt=""/>
                </div>
                <div className='w-full'>
                    <h2 className='uppercase text-3xl mb-3 font-bold'>Registration</h2>
                    <form className='flex flex-col gap-5'>
                        <input className='border rounded-lg p-3 block' placeholder='Enter name' type="text" name="email/phone" id="" />
                        <input className='border rounded-lg p-3 block' placeholder='Enter Class' type="text" name="email/phone" id="" />
                        <input className='border rounded-lg p-3 block' placeholder='Enter Your Current Address/Hall Name' type="text" name="email/phone" id="" />
                        <input className='border rounded-lg p-3 block' placeholder='Enter Home District' type="text" name="email/phone" id="" />
                        <input className='border rounded-lg p-3 block' placeholder='Enter Email/Phone' type="text" name="email/phone" id="" />
                        <input className='border rounded-lg p-3 block' placeholder='Enter New Password' type="password" name="password" id="" />
                        <input className='border rounded-lg p-3 block' placeholder='Confirm Password' type="password" name="password" id="" />
                        <button type='submit' className='font-bold rounded-lg shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-slate-100 px-4 uppercase py-3'>Register</button>
                    </form>
                    <p>Already have an account? Please <Link to={'/login'}>Login</Link></p>
                </div>
            </section>
        </div>
    );
};

export default Registration;