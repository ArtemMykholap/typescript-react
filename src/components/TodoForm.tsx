import React, { useRef } from 'react';
// import React, { useState } from 'react';

interface TodoFormProps {
    onAdd(title:string):void
}


export const TodoFrom: React.FC <TodoFormProps>= (props) => {
    const ref=useRef<HTMLInputElement>(null);
    // const [title, setTitle] = useState<string>('');

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler=(event:React.KeyboardEvent)=>{
        if(event.key==='Enter'){
            // console.log(title)
            props.onAdd(ref.current!.value)
            ref.current!.value=''
            // setTitle('');
        }

    }
 
    return (
        <div className='input-field mt2'>
            <input
            ref={ref}
                // onChange={changeHandler}
                // value={title} 
                type='text' id='title' placeholder=' Введите название дела'
                onKeyPress={keyPressHandler} />
            <label htmlFor='title' className='active'>
                Введите название дела
            </label>
        </div>
    )

}