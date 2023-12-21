import * as Yup from 'yup';


 const validInput = Yup.object({
    inputlist: Yup.string().required('Task is required'),
  });

  export default validInput;