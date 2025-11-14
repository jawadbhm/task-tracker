
import React, { useState, useEffect } from 'react';
import { Task } from '../types';

interface EditTaskModalProps {
    task: Task;
    onSave: (task: Task) => void;
    onClose: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ task, onSave, onClose }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        onSave({ ...task, title, description });
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <div 
                className="bg-secondary rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 space-y-6"
                onClick={e => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold text-text-main">Edit Task</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="edit-title" className="block text-sm font-medium text-text-secondary mb-1">Title</label>
                        <input
                            id="edit-title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-accent text-text-main placeholder-text-secondary border border-transparent focus:outline-none focus:ring-2 focus:ring-highlight"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="edit-description" className="block text-sm font-medium text-text-secondary mb-1">Description</label>
                        <textarea
                            id="edit-description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                            className="w-full px-4 py-2 rounded-md bg-accent text-text-main placeholder-text-secondary border border-transparent focus:outline-none focus:ring-2 focus:ring-highlight"
                        />
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 bg-accent text-text-main font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-secondary transition-colors duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 bg-highlight text-white font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-secondary transition-colors duration-200"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTaskModal;
