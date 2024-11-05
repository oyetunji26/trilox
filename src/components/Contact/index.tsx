/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, {useState, ChangeEvent} from 'react'
import FormField from '../Widgets/FormField'
import CustomButton from '../Widgets/CustomButton'
import * as image from '../assets/images'
import Image from 'next/image';
import SectionTitle from '../Widgets/SectionTitle';

const Contact = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        mail: '',
        message: ''
    });
  return (
    <div className='section' id='contact'>
        {/* <h3 className='text-3xl'>Contact Us</h3> */}
        <SectionTitle title='Contact Us' otherStyles={'md:my-16'}/>
        <div className="grid grid-cols-2 gap-5 my-6 shadow rounded-lg p-4 py-8">
            <div className="flex flex-col gap-4">
                <div className='grid grid-cols-2 gap-2'>
                    <FormField type='text' placeholder='input firstname' value={form.firstName} handleChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, firstName: e.target.value })}/>
                    <FormField type='text' placeholder='input lastname' value={form.lastName} handleChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, lastName: e.target.value })}/>
                </div>
                <FormField type='email' placeholder='Input your email address' value={form.mail} handleChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, mail: e.target.value })}/>
                <FormField type='textarea' placeholder='Please describe your question(s) opr inquiry withas many details as possible' value={form.firstName} handleChange={(e: ChangeEvent<HTMLTextAreaElement> ) => setForm({ ...form, message: e.target.value })}/>
                <CustomButton title='Submit Details' handlePress={() => {}} isLoading={false} />
            </div>
            <div>
                <Image src={image.Asake2} width={1000} height={1000} className='rounded-lg' alt='' />
            </div>
        </div>
    </div>
  )
}

export default Contact