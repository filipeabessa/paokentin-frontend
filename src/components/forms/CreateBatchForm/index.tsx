import BreadTypeCard from '@/components/inputs/BreadTypeCard';
import Button from '@/components/inputs/Button';
import Box from '@/components/layout/Box';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FC, ReactNode, useState } from 'react';
import * as yup from 'yup';

const validationSchema = yup.object({
  breadTypeId: yup
    .string()
    .required('É necessário selecionar o tipo de pão'),
  breadsQuantity: yup
    .number()
    .required('Selecione a quantidade de pães')
});

interface CreateBatchFormProps {
  handleSubmitForm: (requestBody: any) => Promise<any>;
  breadTypes: any;
}

const CreateBatchForm: FC<CreateBatchFormProps> = ({
  handleSubmitForm,
  breadTypes,
}) => {
  const router = useRouter();
  const [selectedBreadTypeId, setSelectedBreadTypeId] = useState(0);
  const formik = useFormik({
    initialValues: {
      breadTypeId: 0,
      breadsQuantity: 0
    },
    validationSchema: validationSchema,
    onSubmit: async (values : any) => {
      const response = await handleSubmitForm({
        ...values,
      });

      if (response.status === 200) {        
        formik.resetForm();
        router.push('/padeiro');
      }
    },
  });

  const handleSelectBreadType = (breadTypeId: number) => {
    setSelectedBreadTypeId(breadTypeId);
    formik.setFieldValue('breadTypeId', breadTypeId);
  }

  return (
    <form 
      onSubmit={formik.handleSubmit}
    >
      <Box 
        display="flex"
        flexDirection="column"
        gap="20px"
      >
        <Box
          display="flex"
          gap="10px"
          flexWrap="wrap"
        >
        {
          breadTypes?.map((breadType: any) => (
            <BreadTypeCard
              key={`breadtype-${breadType.id}`}
              handleClick={() => handleSelectBreadType(breadType.id)}
              backgroundColor={breadType.relatedColor}
              title={breadType.name}
              selected={selectedBreadTypeId === breadType.id}
            />
          ))
        }
        </Box>

        <TextField
          id="breadsQuantity"
          label="Quantidade de pães"
          type="number"
          name="breadsQuantity"
          onChange={formik.handleChange}
          value={formik.values.breadsQuantity}
          error={formik.touched.breadsQuantity && Boolean(formik.errors.breadsQuantity)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.breadsQuantity && formik.errors.breadsQuantity ? String(formik.errors.breadsQuantity) : '' as ReactNode}
        />

        <Button
          type="submit"
        >
          Criar Fornada
        </Button>
      </Box>
    </form>
  );
}

export default CreateBatchForm;