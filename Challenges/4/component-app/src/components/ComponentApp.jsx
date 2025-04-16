import { useState } from 'react';
import CategoryInput from './CategoryInput';

const ComponentApp = () => {
    const [categories, setCategories] = useState([]);

    const handleAddCategory = (newCategory) => {
        if (newCategory.trim().length === 0) return;
        setCategories([...categories, newCategory]);
    };

    return (
        <div>
            <h1>Category Manager</h1>
            <CategoryInput onNewCategory={handleAddCategory} />

            <ul>
                {categories.map((cat, index) => (
                    <li key={index}>{cat}</li>
                ))}
            </ul>
        </div>
    );
};

export default ComponentApp;
