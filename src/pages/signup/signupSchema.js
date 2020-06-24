import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be atleast 8 characters")
    .required("Password is required"),
  repassword: Yup.string()
    .min(8, "Retype the password")
    .required("Retype Password"),
});

export default SignupSchema;
