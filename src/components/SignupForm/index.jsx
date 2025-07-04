import React, { useState } from 'react';
import { useForm } from 'react-hook-form';



const SignupForm = () => {
    // Instanciar el hook useForm
    const { register , handleSubmit,reset,formState: { errors }} = useForm();

    /*const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');*/

    const handleClearClick = (event) => {
        console.log('Form cleared');
        reset();
        /*setName('');
        setAge(''); 
        setAddress('');
        setZipCode('');
        setPhone('');*/
    }

    const handleSubmitForm = (data) => {
        console.log('Form submitted', data);
        /*event.preventDefault();
        console.log('Form submitted',{
            name,
            age,
            address,
            zipCode,
            phone
        });*/
    }

    console.log(errors);

    return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
        <label>
            Name:
           {/* <input type="text" name="name" required value={name} onChange={(event) => setName(event.target.value)} />  */}
           <input {...register('name',{required:true})} type="text"/>
        </label>
        <br />
        <label>
            Age:
            {/*<input type="number" name="age" required value={age} onChange={(event) => setAge(event.target.value)} /> */}
            <input {...register('age')} type="number" name="age" required />
        </label>
        <br />
        <label>
            Address:
            {/*<input type="text" name="address" required value={address} onChange={(event) => setAddress(event.target.value)} /> */}
            <input {...register('address')} type="text" name="address" required />
        </label>
        <br />
        <label>
            Zip Code:
            {/*<input type="text" name="zipCode" required value={zipCode} onChange={(event) => setZipCode(event.target.value)} /> */}
            <input {...register('zipCode')} type="text" name="zipCode" required />
        </label>
        <br />
        <label>
            Phone:
            {/*<input type="tel" name="phone" required value={phone} onChange={(event) => setPhone(event.target.value)} /> */}
            <input {...register('phone')} type="tel" name="phone" required />
        </label>
        <br />
        <button type="button" onClick={handleClearClick}>Clear</button>
        <button type="submit">Submit</button>
    </form>
  )
}

export default SignupForm