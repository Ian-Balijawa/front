import { useCallback } from "react";

export const API_URL = "#";

export const requiredValidation = `is required`;

export const simulateNetworkRequest = () => {
  return new Promise((resolve) => setTimeout(resolve, 2000));
};

export const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

// export const requiredValidation = (value) => {
//     if (value) {
//       return undefined;
//     }
//     return "This field is required";
//   };
