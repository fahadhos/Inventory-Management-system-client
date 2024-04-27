import React from 'react';

const Container = ({children}) => {
    return (
        <div className=' mx-auto relative left-[10rem] top-[4rem]'>
            {children}
        </div>
    );
};

export default Container;