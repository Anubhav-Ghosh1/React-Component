import React from 'react';
import data from '../../data/components';
import Card from '../Card/Cards';

function ComponentSection({isDarkmode,setIsDarkMode}) {
    return (
        <div className='flex w-full lg:mt-10 justify-center'>
            <div className='grid justify-between gap-10 grid-cols-1 lg:grid-cols-4'>
            {
                data.map((item)=>{
                    return <Card isDarkmode={isDarkmode} title={item.title} code={item.code} codeComponent = {item.codeComponent}/>
                })
            }            
            </div>
        </div>
    );
}

export default ComponentSection;