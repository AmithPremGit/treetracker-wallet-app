import { AuthUser } from "../types/auth";

// Trims any string fields in the AuthUser object and leaves other fields intact
export const trimInputs = (input: Partial<AuthUser>): AuthUser => {
  return {
    username: typeof input.username === "string" ? input.username.trim() : "",
    firstName:
      typeof input.firstName === "string" ? input.firstName.trim() : undefined,
    lastName:
      typeof input.lastName === "string" ? input.lastName.trim() : undefined,
    email: typeof input.email === "string" ? input.email.trim() : undefined,
    password: typeof input.password === "string" ? input.password.trim() : "",
    confirmPassword:
      typeof input.confirmPassword === "string"
        ? input.confirmPassword.trim()
        : undefined,
    isSubmitting: input.isSubmitting ?? false,
    submissionSuccess: input.submissionSuccess ?? false,
    error: input.error ?? null,
    fieldErrors: input.fieldErrors ?? {},
  };
};

// Handles validation errors and formats them into a key-value object
export const handleValidationError = (
  error: any,
): { [key: string]: string } => {
  return error.details.reduce(
    (acc: { [key: string]: string }, curr: any) => {
      if (curr.context?.key) {
        acc[curr.context.key] = curr.message;
      }
      return acc;
    },
    {} as { [key: string]: string },
  );
};
