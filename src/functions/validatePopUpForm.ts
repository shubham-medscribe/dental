type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  financing: string;
  creditscore: string;
  note: string;
  consent: boolean;
};

type ValidationErrors = Partial<Record<keyof FormDataType, string>>;

const validateForm = (data: FormDataType): boolean => {
  const errors: ValidationErrors = {};

  if (!data.firstName.trim() || data.firstName.length < 2) {
    errors.firstName = "First name is required and must be at least 2 characters.";
  }

  if (!data.lastName.trim() || data.lastName.length < 2) {
    errors.lastName = "Last name is required and must be at least 2 characters.";
  }

  if (!data.email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.phone.trim() || !/^\+?\d{10,15}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.financing.trim()) {
    errors.financing = "Please select a financing option.";
  }

  // Only validate credit score if financing is "yes"
  if (data.financing.toLowerCase() === "yes" && !data.creditscore.trim()) {
    errors.creditscore = "Please select a credit score range.";
  }

  if (!data.consent) {
    errors.consent = "You must agree to the terms.";
  }

  console.log(errors);
  
  // If there are any errors, return false; otherwise, return true
  return Object.keys(errors).length === 0;
};
 export default validateForm;