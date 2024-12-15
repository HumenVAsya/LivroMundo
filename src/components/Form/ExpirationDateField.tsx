import React from "react";
import { Box, FormControl, Select, MenuItem, Typography } from "@mui/material";
import { FieldError, UseFormRegister } from "react-hook-form";
import { CustomTypForm } from "./CustomTypForm";

interface ExpirationDateFieldProps {
  monthName: string;
  yearName: string;
  monthError?: FieldError;
  yearError?: FieldError;
  register: UseFormRegister<any>;
}

export const ExpirationDateField: React.FC<ExpirationDateFieldProps> = ({
  monthName,
  yearName,
  monthError,
  yearError,
  register,
}) => {
  return (
    <Box>
      <CustomTypForm>Card expiration</CustomTypForm>
      <Box display="flex" gap="8px">
        <FormControl
          fullWidth
          error={!!monthError}
          sx={{
            border: "1px solid white",
            borderRadius: "30px",
            "& .MuiSelect-root": {
              padding: "10px",
              fontSize: "inherit",
              background: "none",
              color: "white",
            },
            "& .MuiSelect-icon": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiFormHelperText-root": {
              margin: 0,
            },
          }}
        >
          <Select
            labelId="expiration-month-label"
            defaultValue=""
            {...register(monthName, {
              required: "Expiration month is required",
            })}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <MenuItem key={i + 1} value={String(i + 1).padStart(2, "0")}>
                {String(i + 1).padStart(2, "0")}
              </MenuItem>
            ))}
          </Select>
          <Typography variant="caption" color="error">
            {monthError?.message}
          </Typography>
        </FormControl>

        <FormControl
          fullWidth
          error={!!yearError}
          sx={{
            border: "1px solid white",
            borderRadius: "30px",
            "& .MuiSelect-root": {
              padding: "10px",
              fontSize: "inherit",
              background: "none",
              color: "white",
            },
            "& .MuiSelect-icon": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiFormHelperText-root": {
              margin: 0,
            },
          }}
        >
          <Select
            labelId="expiration-year-label"
            defaultValue=""
            {...register(yearName, {
              required: "Expiration year is required",
            })}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <MenuItem
                key={i + new Date().getFullYear()}
                value={i + new Date().getFullYear()}
              >
                {i + new Date().getFullYear()}
              </MenuItem>
            ))}
          </Select>
          <Typography variant="caption" color="error">
            {yearError?.message}
          </Typography>
        </FormControl>
      </Box>
    </Box>
  );
};
