import {
  Alert,
  Button,
  Snackbar,
  Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { InputField } from "./Form/InputField";
import { ExpirationDateField } from "./Form/ExpirationDateField";
import { useState } from "react";

type FormValues = {
  nameOnCard: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  securityCode: string;
};

export const Form = () => {
  const form = useForm({
    defaultValues: {
      nameOnCard: "",
      cardNumber: "",
      expirationMonth: "",
      expirationYear: "",
      securityCode: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const [openSnackbar, setOpenSnackbar] = useState(false);

  
  const onSubmit = (data: FormValues) => {
    console.log(data);
    setOpenSnackbar(true); 
  };


  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack>
        <InputField
          name="nameOnCard"
          label="Name on card"
          placeholder="Meet Patel"
          register={register}
          validationRules={{ required: "Name on card is required" }}
          error={errors.nameOnCard}
        />

        <InputField
          name="cardNumber"
          label="Card number"
          placeholder="0000 0000 0000 0000"
          register={register}
          validationRules={{
            required: "Card number is required",
            pattern: {
              value: /^\d{16}$/,
              message: "Card number must be 16 digits",
            },
          }}
          error={errors.cardNumber}
        />
        <ExpirationDateField
          monthName="expirationMonth"
          yearName="expirationYear"
          monthError={errors.expirationMonth}
          yearError={errors.expirationYear}
          register={register}
        />

        <InputField
          name="securityCode"
          label="Card Security Code"
          placeholder="Code"
          register={register}
          validationRules={{
            required: "Card security code is required",
            pattern: {
              value: /^\d{3,4}$/,
              message: "Security code must be 3 or 4 digits",
            },
          }}
          error={errors.securityCode}
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{
            fontFamily: "inter",
            display: "fles",
            margin: "24px auto 0 auto",
            width: "100%",
            height: "48px",
            borderRadius: "30px",
            flexGrow: 1
          }}
        >
          Submit
        </Button>
      </Stack>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          Form successfully submitted!
        </Alert>
      </Snackbar>
    </form>
  );
};
