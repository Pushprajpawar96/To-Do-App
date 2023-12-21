import React, { useState } from 'react';
import { useFormik } from 'formik';
import './TODO.css';
import TODOLIST from './TODOLIST';
import validInput from './Validation.js'

const ToDo = () => {

    const initialValues = {
        inputlist : ''
    }
  const [item, setItem] = useState([]);

   
  const {values,handleBlur,handleChange,handleSubmit,resetForm} = useFormik({
    initialValues:  initialValues,
    validationSchema: validInput,
    onSubmit: (values) => {
      if (values.inputlist.trim() !== '') {
        setItem((list) => [...list, values.inputlist]);
        resetForm();
      }
    },

    
  });


  const handleDelete = (id) => {
    console.log('Deleted');
    setItem((oldlist) => oldlist.filter((array, index) => index !== id));
    
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>TODO LIST </h1>
          <br />

          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='inputlist'
              autoComplete='off'
              value={values.inputlist}
              onChange={handleChange}
              onBlur={handleBlur}
            />
           <br />
           <br />
            <button type='submit'>Add</button>
            <br />
          </form>

          <ol>
            {item.map((itemval, index) => (
                 <TODOLIST key={index} id={index} text={itemval} onSelect={handleDelete} /> ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDo;

