import React, { useState } from 'react';

const AdminPanel = () => {
    const [src, setSrc] = useState('');
    const [demoUrl, setDemoUrl] = useState('');
    const [codeUrl, setCodeUrl] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const project = { src, demoUrl, codeUrl, name };

        try {
            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(project),
            });

            if (response.ok) {
                setMessage('Project added successfully!');
                setSrc('');
                setDemoUrl('');
                setCodeUrl('');
                setName('');
            } else {
                setMessage('Failed to add project');
            }
        } catch (error) {
            setMessage('Error: ' + error.message);
        }
    };

    return (
        <div className="admin-panel max-w-lg mx-auto mt-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Image Source URL:</label>
                    <input 
                        type="text" 
                        value={src} 
                        onChange={(e) => setSrc(e.target.value)} 
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                        required 
                    />
                </div>
                <div>
                    <label className="block mb-1">Demo URL:</label>
                    <input 
                        type="text" 
                        value={demoUrl} 
                        onChange={(e) => setDemoUrl(e.target.value)} 
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                        required 
                    />
                </div>
                <div>
                    <label className="block mb-1">Code URL:</label>
                    <input 
                        type="text" 
                        value={codeUrl} 
                        onChange={(e) => setCodeUrl(e.target.value)} 
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                        required 
                    />
                </div>
                <div>
                    <label className="block mb-1">Project Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                        required 
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg"
                >
                    Add Project
                </button>
            </form>
            {message && <p className="mt-4 text-center">{message}</p>}
        </div>
    );
};

export default AdminPanel;
