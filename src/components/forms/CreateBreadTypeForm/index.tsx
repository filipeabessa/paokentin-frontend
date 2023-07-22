import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, TextField } from '@mui/material';
import { FC, ReactNode } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';



const validationSchema = yup.object({
  name: yup
    .string()
    .required('Campo obrigatório'),
  description: yup
    .string()
    .required('Campo obrigatório'),
  timeToBake: yup
    .number()
    .required('Campo obrigatório'),
  pricePerUnit: yup
    .number()
    .required('Campo obrigatório'),
  glutenFree: yup
    .boolean()
    .required('Campo obrigatório'),
});

interface CreateBreadTypeFormProps {
  handleSubmitForm: (requestBody: any) => Promise<any>;
  handleCloseModal: () => void;
}

const CreateBreadTypeForm: FC<CreateBreadTypeFormProps> = ({
  handleSubmitForm,
  handleCloseModal,
} : CreateBreadTypeFormProps) => {

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      timeToBake: 0,
      pricePerUnit: 0,
      glutenFree: "false"
    },
    validationSchema: validationSchema,
    onSubmit: async (values : any) => {
      const response = await handleSubmitForm({
        ...values,
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box 
        display="flex"
        flexDirection="column"
        gap="20px"
      >
          <TextField 
            id="name" 
            name="name" 
            label="Nome do pão" 
            variant="outlined" 
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.name && formik.errors.name ? String(formik.errors.name) : '' as ReactNode}
          />
          <TextField
            id="description"
            label="Descrição"
            multiline                    
            rows={5}
            name="description"                     
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <TextField
            id="timeToBake"
            label="Tempo para assar"
            type="number"
            name="timeToBake"
            onChange={formik.handleChange}
            value={formik.values.timeToBake}
            error={formik.touched.timeToBake && Boolean(formik.errors.timeToBake)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.timeToBake && formik.errors.timeToBake ? String(formik.errors.timeToBake) : '' as ReactNode}
          />
          <TextField
            id="pricePerUnit"
            label="Preço por unidade"
            type="number"
            name="pricePerUnit"
            onChange={formik.handleChange}
            value={formik.values.pricePerUnit}
            error={formik.touched.pricePerUnit && Boolean(formik.errors.pricePerUnit)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.pricePerUnit && formik.errors.pricePerUnit ? String(formik.errors.pricePerUnit) : '' as ReactNode}
          />
          <FormControl fullWidth>
            <FormLabel id="glutenFree">Sem glúten</FormLabel>
            <RadioGroup
              aria-label="glutenFree"
              name="glutenFree"
              value={formik.values.glutenFree}
              onChange={formik.handleChange}
            >
              <FormControlLabel value="true" control={<Radio />} label="Sim" />
              <FormControlLabel value="false" control={<Radio />} label="Não" />
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            size="large"
            fullWidth={false}
            type="submit"
          >
            Criar tipo de pão
          </Button>
        </Box>
      </form>
  )
}

export default CreateBreadTypeForm;