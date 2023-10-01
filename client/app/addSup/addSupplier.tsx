import React, { useState } from 'react';

const AddSupplier: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleSubmit = () => {
        // Handle the form submission, e.g., make an API call to save the supplier
    };

    return (
        <div className="container mx-auto mt-10 p-4 bg-white rounded shadow-lg w-1/2">
            <h1 className="text-xl mb-5">Add Supplier</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                        className="mt-1 p-2 w-full border rounded-md" 
                    />
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className="mt-1 p-2 w-full border rounded-md" 
                    />
                </div>

                <button type="submit" className="mt-5 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 border-2 border-blue-700 rounded-full hover:bg-blue-800 focus:outline-none">
                    Add Supplier
                </button>
            </form>
        </div>
    );
}

export default AddSupplier;
