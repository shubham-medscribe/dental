type FormDataType = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  financing: string;
  annual_income: number | string;
  credit_score: string;
  home_owner: string;
  co_signer: string;
  note: string;
  consent: boolean;
};

type ValidationErrors = Partial<Record<keyof FormDataType, string>>;

const validateForm = (data: FormDataType): boolean => {
  const errors: ValidationErrors = {};

  if (!data.first_name.trim() || data.first_name.length < 2) {
    errors.first_name =
      "First name is required and must be at least 2 characters.";
  }

  if (!data.last_name.trim() || data.last_name.length < 2) {
    errors.last_name =
      "Last name is required and must be at least 2 characters.";
  }

  if (
    !data.email.trim() ||
    !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.phone.trim() || !/^\+?\d{10,15}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.financing.trim()) {
    errors.financing = "Please select a financing option.";
  }

  // Validate fields if financing is "yes"
  if (data.financing.toLowerCase() === "yes") {
    if (!data.credit_score.trim()) {
      errors.credit_score = "Please select a credit score range.";
    }

    if (data.financing.toLowerCase() === "yes" && !data.home_owner.trim()) {
      errors.home_owner = "Please indicate if you are a homeowner.";
    }

    if (data.financing.toLowerCase() === "yes" && !data.co_signer.trim()) {
      errors.co_signer = "Please indicate if you have a co-signer.";
    }

    if (
      data.financing.toLowerCase() === "yes" &&
      (!data.annual_income ||
        isNaN(Number(data.annual_income)) ||
        Number(data.annual_income) <= 0)
    ) {
      errors.annual_income = "Please enter a valid annual income.";
    }
  }

  if (!data.consent) {
    errors.consent = "You must agree to the terms.";
  }

  console.log(errors);

  // If there are any errors, return false; otherwise, return true
  return Object.keys(errors).length === 0;
};

export default validateForm;
