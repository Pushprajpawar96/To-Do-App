import React, { useState } from 'react';
import { useFormik } from 'formik';
import './TODO.css';
import TODOLIST from './TODOLIST';
import validInput from './Validation.js'

const ToDo = () => {

  const [item, setItem] = useState([]);

   
  const {values,handleBlur,handleChange,handleSubmit,resetForm,errors} = useFormik({
    initialValues: {
      inputlist: '',
    },
    validationSchema: validInput,
    onSubmit: (values) => {
      if (values.inputlist.trim() !== '') {
        setItem((oldlist) => [...oldlist, values.inputlist]);
        resetForm();
      }
    },

    
  });


  const handleDelete = (id) => {
    console.log('Deleted');
    setItem((oldItems) => oldItems.filter((arrElem, index) => index !== id));
    
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
          {/* {errors.inputlist &&  <small>{errors.inputlist}</small>} */}


          <ol>
            {item.map((itemval, index) => ( <TODOLIST key={index} id={index} text={itemval} onSelect={handleDelete} />  ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDo;

