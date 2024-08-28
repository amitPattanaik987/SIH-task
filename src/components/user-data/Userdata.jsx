import React, { useState } from 'react';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        email: '',
        phone: '',
        college: '',
        domain: '',
        lectureTime: '',
        skills: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
  
        fetch('http://localhost:5000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Email sent successfully:', data);
          })
          .catch((error) => {
            console.error('Error sending email:', error);
          });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                className="bg-white shadow-md rounded-lg p-8 w-11/12 md:w-2/3 lg:w-3/5"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Student Details Form</h2>

                {/* Grid layout for side-by-side fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* City */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                            placeholder="Enter your city"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    {/* College */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="college">
                            College
                        </label>
                        <input
                            id="college"
                            name="college"
                            type="text"
                            value={formData.college}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                            placeholder="Enter your college name"
                            required
                        />
                    </div>

                    {/* Domain */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="domain">
                            Domain
                        </label>
                        <input
                            id="domain"
                            name="domain"
                            type="text"
                            value={formData.domain}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                            placeholder="Enter your preferred domain"
                            required
                        />
                    </div>

                    {/* Lecture Time */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lectureTime">
                            Lecture Time
                        </label>
                        <input
                            id="lectureTime"
                            name="lectureTime"
                            type="text"
                            value={formData.lectureTime}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                            placeholder="Enter the time you are available for lectures"
                            required
                        />
                    </div>

                    {/* Skills */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
                            Skills
                        </label>
                        <input
                            id="skills"
                            name="skills"
                            type="text"
                            value={formData.skills}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                            placeholder="Enter your skills (comma separated)"
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-6">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StudentForm;
