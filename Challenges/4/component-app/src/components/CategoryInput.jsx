import { useState } from 'react';

const CategoryInput = ({ onNewCategory }) => {
    const [category, setCategory] = useState('');

    const handleInputChange = (event) => {
        setCategory(event.target.value);
    };

    const handleAddClick = () => {
        onNewCategory(category);
        setCategory('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Write a category"
                value={category}
                onChange={handleInputChange}
            />
            <button onClick={handleAddClick}>Add Category</button>
        </div>
    );
};

export default CategoryInput;
