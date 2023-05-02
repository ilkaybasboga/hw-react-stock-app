// import Avatar from "@mui/material/Avatar";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import LockIcon from "@mui/icons-material/Lock";
// import image from "../assets/result.svg";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Form, Formik } from "formik";
// import TextField from "@mui/material/TextField";
// import { object, string } from "yup";
// import LoadingButton from "@mui/lab/LoadingButton";
// import useAuthCall from "../hooks/useAuthCall";

// const Login = () => {
//   const navigate = useNavigate();
//   const { currentUser, error, loading } = useSelector((state) => state?.auth);

//   const{ login }=useAuthCall()

//   const loginScheme = object({
//     email: string()
//       .email("email Format is wrong")
//       .required("Please enter your e-mail address"),
//     password: string()
//       .required("Password is required")
//       .min(6)
//       .max(20, "opps!!! max 20 characters")
//       .matches(/\d+/, "password must match the following:Number ")
//       .matches(/[A-Z]/, "password must match the following:uppercase letter ")
//       .matches(/[a-z]/, "password must match the following:lowercase letter ")
//       .matches(
//         /[!,?{}><%&$#£+-.]+/,
//         "password must match the following:'!,?{}><%&$#£+-.' "
//       ),
//   });
//   return (
//     <Container maxWidth="lg">
//       <Grid
//         container
//         justifyContent="center"
//         direction="row-reverse"
//         sx={{
//           height: "100vh",
//           p: 2,
//         }}
//       >
//         <Grid item xs={12} mb={3}>
//           <Typography variant="h3" color="primary" align="center">
//             STOCK APP
//           </Typography>
//         </Grid>

//         <Grid item xs={12} sm={10} md={6}>
//           <Avatar
//             sx={{
//               backgroundColor: "secondary.light",
//               m: "auto",
//               width: 40,
//               height: 40,
//             }}
//           >
//             <LockIcon size="30" />
//           </Avatar>
//           <Typography
//             variant="h4"
//             align="center"
//             mb={4}
//             color="secondary.light"
//           >
//             Login
//           </Typography>
//           <Formik
//             initialValues={{ email: "", password: "" }}
//             validationSchema={loginScheme}
//             onSubmit={(values, actions) => {
//               //! verileri gönderiyoruz  -- Post isteği
//               login(values)
//                 //? navigate
            
//               actions.resetForm();
//               actions.setSubmitting(false);
//             }}
//           >
//             {({ values, errors, touched, handleChange, handleBlur }) => (
//               <Form>
//                 <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                   <TextField
//                     label="Email"
//                     type="email"
//                     id="email"
//                     name="email"
//                     variant="filled"
//                     value={values?.email || ""}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.email && Boolean(errors.email)}
//                     helperText={touched.email && errors.email}
//                   />
//                   <TextField
//                     label="Password"
//                     type="password"
//                     id="password"
//                     name="password"
//                     variant="filled"
//                     value={values?.password || ""}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.password && Boolean(errors.password)}
//                     helperText={touched.password && errors.password}
//                   />
//                   <LoadingButton
//                     variant="contained"
//                     type="submit"
//                     loading={loading}
//                     sx={{color:"black",fontWeight:"900" ,backgroundColor:"purple"}}
//                   >
//                     SUBMİT
//                   </LoadingButton>
//                 </Box>
//               </Form>
//             )}
//           </Formik>
//           <Box sx={{ textAlign: "center", mt: 2 }}>
//             <Link to="/register">Do you have not an account?</Link>
//           </Box>
//         </Grid>

//         <Grid item xs={10} sm={7} md={6}>
//           <Container>
//             <img src={image} alt="img" />
//           </Container>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Login;


import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import LockIcon from "@mui/icons-material/Lock"
import image from "../assets/result.svg"
import { Link } from "react-router-dom"
import { Formik } from "formik"
import useAuthCall from "../hooks/useAuthCall"
import LoginForm, { loginScheme } from "../components/LoginForm"

const Login = () => {
   const { login } = useAuthCall()

  return (
    <Container maxWidth="lg" sx={{backgroundColor:"#f5b3b3", borderRadius:"0 20rem"}}>
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginScheme}
            onSubmit={(values, actions) => {
              login(values)
              actions.resetForm()
              actions.setSubmitting(false)
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
 