const error = (value: string, id: string, password: string): string | null => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  switch (id) {
    case "name":
      if (value.trim() === "") {
        return "Name is required";
      }
      break;

    case "phoneNumber":
      if (isNaN(Number(value)) || value.toString().length <= 7) {
        return "Please enter a valid phone number";
      }
      break;

    case "email":
      if (!regex.test(value)) {
        return "Invalid email";
      }
      break;

    case "passwordConfirm":
      if (password !== value) {
        return "Passwords do not match";
      }
      break;
    default:
  }

  return null;
};

export default error;
