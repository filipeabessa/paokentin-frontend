import { FC, ReactNode, useState } from 'react';
import BreadTypeCard from '@/components/inputs/BreadTypeCard';
import Button from '@/components/inputs/Button';
import Box from '@/components/layout/Box';
import { TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { CreateBatchDto } from '@/types';

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
      breadsQuantity: 6
    },
    validationSchema: validationSchema,
    onSubmit: async (values : any) => {
      const response = await handleSubmitForm({
        quantity: values.breadsQuantity,
        breadTypeId: values.breadTypeId,
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
        {
          Boolean(formik.errors.breadTypeId) && (
            <Typography
              color="red"
            >
              {
                String(formik.errors.breadTypeId)
              }
            </Typography>
          )
        }

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