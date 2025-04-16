import { memo } from 'react';

export const Son = memo(({ numero, increment }) => {
    console.log('again reloaded...');

    return (
        <button
            className="btn btn-primary m-3"
            onClick={() => increment(numero)}
        >
            {numero}
        </button>
    );
});
