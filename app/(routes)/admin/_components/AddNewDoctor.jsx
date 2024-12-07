'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Image from 'next/image';
import GlobalApi from '@/app/_utils/db';
import { Button } from '@/components/ui/button';

const AddNewDoctor = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // password: '',
    phone: '',
    // dob: '',
    // gender: '',
    // doctorDepartment: '',
    // Add other necessary fields
  });
  // const [docAvatarPreview, setDocAvatarPreview] = useState(null);

  const departmentsArray = [
    'Cardiology',
    'Neurology',
    'Pediatrics',
    // Add more departments as needed
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // const handleAvatar = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setDocAvatarPreview(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const response = await GlobalApi.addDoctor(formData);
      console.log(response.data);
      toast.success('Doctor added successfully!');
      router.push('/'); // Adjust the route as needed
    } catch (error) {
      console.error('Error adding doctor:', error);
      toast.error('Failed to add doctor. Please try again.');
    }
  };

  return (
    <section className="page">
      <section className="container add-doctor-form">
        {/* <Image src="/logo.png" alt="logo" className="logo" width={100} height={100} /> */}
        <h1 className="form-title">REGISTER A NEW DOCTOR</h1>
        <form onSubmit={handleAddNewDoctor}>
          <div className="first-wrapper">
            {/* <div>
              <Image
                src={docAvatarPreview || "/docHolder.jpg"}
                alt="Doctor Avatar"
                width={200}
                height={200}
              />
              <input type="file" onChange={handleAvatar} accept="image/*" />
            </div> */}
            <div>
              {Object.keys(formData).map((key) => (
                key !== 'gender' && key !== 'doctorDepartment' ? (
                  <input
                    key={key}
                    type={key === 'dob' ? 'date' : key === 'password' ? 'password' : 'text'}
                    name={key}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                    value={formData[key]}
                    onChange={handleInputChange}
                  />
                ) : null
              ))}
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <select
                name="doctorDepartment"
                value={formData.doctorDepartment}
                onChange={handleInputChange}
              >
                <option value="">Select Department</option>
                {departmentsArray.map((depart, index) => (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                ))}
              </select>
              <button type="submit">Register New Doctor</button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddNewDoctor;
