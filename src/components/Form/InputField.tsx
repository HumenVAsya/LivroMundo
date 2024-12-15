import React from "react";
import { FormControl, InputBase, Typography } from "@mui/material";
import { FieldError, UseFormRegister } from "react-hook-form";
import { CustomTypForm } from "./CustomTypForm";

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  register: UseFormRegister<any>;
  validationRules: object;
  error?: FieldError;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  register,
  validationRules,
  error,
}) => {
  return (
    <FormControl fullWidth error={!!error}>
      <CustomTypForm>{label}</CustomTypForm>
      <InputBase
        type={type}
        {...register(name, validationRules)}
        placeholder={placeholder}
        sx={{
          border: "1px solid white",
          borderRadius: "30px",
          padding: "10px",
          color: "white",
          fontFamily: "inter",
          "&::placeholder": {
            color: "yellow",
          },
        }}
      />
      <Typography variant="caption" color="error">
        {error?.message}
      </Typography>
    </FormControl>
  );
};
