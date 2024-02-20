import React from 'react';

const List = ({items, renderItems}) => {
    return <>{items.map(renderItems)}</>
}

export default List;
