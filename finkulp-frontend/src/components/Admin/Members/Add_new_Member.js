import React, { useState } from 'react';

const MemberForm = () => {
  const [memberDetails, setMemberDetails] = useState({
    name: "",
    role: "",
    image: "",
    email: "",
    phone: "",
    address: "",
    status: "",
    joiningDate: '',
    CV: null,
    certification: [
      {
        organization: '',
        complete: '',
        name: '',
        category: '',
        certificate: null
      },
    ]
  });

  const [certificateCount, setCertificateCount] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMemberDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    setMemberDetails(prevDetails => ({
      ...prevDetails,
      CV: file
    }));
  };
  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    setMemberDetails(prevDetails => ({
      ...prevDetails,
      image: file
    }));
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    const newCertifications = [...memberDetails.certification];
    newCertifications[index]['certificate'] = file;
    setMemberDetails(prevDetails => ({
      ...prevDetails,
      certification: newCertifications
    }));
  };

  const handleCertificationChange = (e, index) => {
    const { name, value } = e.target;
    const newCertifications = [...memberDetails.certification];
    newCertifications[index][name] = value;
    setMemberDetails(prevDetails => ({
      ...prevDetails,
      certification: newCertifications
    }));
  };

  const handleCertificateCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setCertificateCount(count);
    const newCertifications = Array.from({ length: count }, (_, index) => (
      memberDetails.certification[index] || { organization: '', complete: '', name: '', category: '', certificate: null }
    ));
    setMemberDetails(prevDetails => ({
      ...prevDetails,
      certification: newCertifications
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(memberDetails);
    // Process the form data and handle file uploads here
  };

  return (
    <div className="flex justify-center py-8 bg-gray-100">
      <form onSubmit={handleSubmit} className="border border-gray-300 bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Member Details</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input type="text" name="name" value={memberDetails.name} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Role:</label>
          <input type="text" name="role" value={memberDetails.role} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
          <input type="file" name="image"  onChange={handleFileChange2} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="email" name="email" value={memberDetails.email} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
          <input type="text" name="phone" value={memberDetails.phone} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
          <input type="text" name="address" value={memberDetails.address} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
          <input type="text" name="status" value={memberDetails.status} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Joining Date:</label>
          <input type="date" name="joiningDate" value={memberDetails.joiningDate} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload the CV:</label>
          <input type="file" name="cv" onChange={handleFileChange1} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Enter the Number of Certificates:</label>
          <input type="number" value={certificateCount} onChange={handleCertificateCountChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        {memberDetails.certification.map((cert, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Certification {index + 1}</h4>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Organization:</label>
              <input type="text" name="organization" value={cert.organization} onChange={(e) => handleCertificationChange(e, index)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Complete:</label>
              <input type="text" name="complete" value={cert.complete} onChange={(e) => handleCertificationChange(e, index)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input type="text" name="name" value={cert.name} onChange={(e) => handleCertificationChange(e, index)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
              <input type="text" name="category" value={cert.category} onChange={(e) => handleCertificationChange(e, index)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Upload the Certificate:</label>
              <input type="file" name="file" onChange={(e) => handleFileChange(e, index)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </div>
        ))}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>
    </div>
  );
};

export default MemberForm;
