import React from 'react';

export default function Task({ task: {id, title, state}, onArchive}
    return(
        <div className="list-item">
            <input type="title" value={title} readOnly={true} />
        </div>
    )
    )