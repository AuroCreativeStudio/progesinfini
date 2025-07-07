import React, { useState } from 'react';
import { postEnquireForm } from '../../services/enquireService';

const EnquireForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneno: '',
        workshop_id: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postEnquireForm(formData);
            console.log('Response:', response.data);
            alert('Enquiry submitted successfully!');
            onClose();
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit enquiry.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
            <div className="bg-gray-100 p-6 rounded-lg w-full max-w-2xl relative overflow-y-auto max-h-[90vh] shadow-lg">

                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-700 text-2xl font-bold">&times;</button>

                {/* Form Heading */}
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Enquire Form</h2>

                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Name */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                    </div>

                    {/* Email */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                    </div>

                    {/* Phone Number */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="tel"
                            name="phoneno"
                            id="phoneno"
                            value={formData.phoneno}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="phoneno" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                    </div>

                    {/* Workshop ID */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="text"
                            name="workshop_id"
                            id="workshop_id"
                            value={formData.workshop_id}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="workshop_id" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Workshop ID (Name)</label>
                    </div>

                    {/* Message */}
                    <div className="relative z-0 w-full group">
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                            placeholder=" "
                            required
                        ></textarea>
                        <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquireForm;
