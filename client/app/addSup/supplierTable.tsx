import React from 'react';

interface Supplier {
    id: number;
    name: string;
    email: string;
}

interface SupplierTableProps {
    suppliers: Supplier[];
}

const SupplierTable: React.FC<SupplierTableProps> = ({ suppliers }) => {
    return (
        <div className="container mx-auto mt-10 p-4 bg-white rounded shadow-lg">
            <h1 className="text-xl mb-5">Suppliers</h1>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th className="py-3 px-5 border-b border-gray-300">ID</th>
                        <th className="py-3 px-5 border-b border-gray-300">Name</th>
                        <th className="py-3 px-5 border-b border-gray-300">Email</th>
                        <th className="py-3 px-5 border-b border-gray-300">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(supplier => (
                        <tr key={supplier.id}>
                            <td className="py-3 px-5">{supplier.id}</td>
                            <td className="py-3 px-5">{supplier.name}</td>
                            <td className="py-3 px-5">{supplier.email}</td>
                            <td className="py-3 px-5">
                                {/* Add action buttons like Edit, Delete, etc. here */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SupplierTable;
