# Trello Client

## Getting started

## Tasks

### Task 1 - Setup

- Create a react application using React [documentation](https://create-react-app.dev/docs/getting-started)
- Run `npm start` or `yarn start`
- Add Material UI dependencies `npm install --save @mui/material @mui/lab @mui/icons-material @emotion/react @emotion/styled`
- Add Router dependency `npm install --save react-router-dom`
- Add React-Tool Kit dependencies `npm install --save @reduxjs/toolkit react-redux redux-logger`
- Add Formik dependencies `npm install --save formik yup`
- Update `package.json`
    - ```
        "husky": {
                "hooks": {
                "pre-commit": "lint-staged"
            }
        },
        "lint-staged": {
            "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
                "prettier --write"
            ]
        }
      ```
- Create Redux Store - https://redux-toolkit.js.org/tutorials/quick-start
    - Create file in `store/index.js`
    - ```
        export const store = configureStore({
            reducer: {},
            middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
            devTools: process.env.NODE_ENV !== 'production',
        })
      ```
- Create Layout
    - Create file `layouts/LogoOnlyLayout.js`
    - ```
        export default function LogoOnlyLayout() {
            return (
                <>
                    <Outlet />
                </>
            );
        }
      ```
- Create Pages
    - Create file `pages/Login.js`
    - ```
        export default function Login() {
            return <Typography>Login</Typography>
        }
      ```
    - Create file `pages/Register.js`
    - ```
        export default function Register() {
            return <Typography>Register</Typography>
        }
      ```
- Create Router - https://reactrouter.com/en/main/hooks/use-routes
    - Create `routes.js`
    - ```
        export default function Router() {
            return useRoutes([
                {
                    path: "/",
                    element: <LogoOnlyLayout />,
                    children: [
                        {
                            path: "login",
                            element: <Login />,
                        },
                        { 
                            path: "register", 
                            element: <Register /> 
                        },
                    ],
                },
            ]);
        }
      ```
- Update `App.js`
    - ```
        function App() {
            return (
                <>
                    <Provider store={store}>
                        <BrowserRouter>
                            <Router />
                        </BrowserRouter>
                    </Provider>
                </>
            );
        }
      ```
### Task 2 - Design Register page

- Initiate Formik
  ```
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        }
    });

    const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;
  ```
- Create From elements
  ```
    <TextField
        fullWidth
        label="First name"
        {...getFieldProps("firstName")}
        error={Boolean(touched.firstName && errors.firstName)}
        helperText={touched.firstName && errors.firstName}
    />
  ```
- Add validation
  ```
    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("First name required"),
        lastName: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Last name required"),
        email: Yup.string()
            .email("Email must be a valid email address")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
        passwordConfirmation: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"),
    });
  ```
- Add State
  ```
    const [showPassword, setShowPassword] = useState(false);
  ```
  ```
    <TextField
        fullWidth
        type={showPassword ? "text" : "password"}
        label="Confirm Password"
        {...getFieldProps("passwordConfirmation")}
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <IconButton
                    edge="end"
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                    <VisibilityIcon />
                    ) : (
                    <VisibilityOffIcon />
                    )}
                </IconButton>
                </InputAdornment>
            ),
        }}
        error={Boolean(
            touched.passwordConfirmation && errors.passwordConfirmation
        )}
        helperText={
            touched.passwordConfirmation && errors.passwordConfirmation
        }
    />
  ```
### Task 3 - Store user data in React Store

- Use dispatch and reducer to store data in redux store
  ```
      const dispatch = useDispatch();
      dispatch(
        setUser({
          firstName,
          lastName,
          email,
          password,
        })
      );
  ```
- Create Home page
  ```
    export default function Home() {
        return <Typography>Home</Typography>
    }
  ```
- Use navigate to jump from one page to another one.
  ```
    const navigate = useNavigate();
    navigate("/home")
  ```
- Fetch user details on Home page
  ```
    const user = useSelector((state) => state.user.data);

    <Container>
        <Typography variant="h2">Home</Typography>

        <Stack>
            <Typography>First Name: {user["firstName"]}</Typography>
            <Typography>Last Name: {user["lastName"]}</Typography>
            <Typography>Email: {user["email"]}</Typography>
        </Stack>
    </Container>
  ```
- Create App bar on Home page
  ```
    <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Trello Clone
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex", ml: 4 }}>
            <Button sx={{ color: "white", fontWeight: "bold" }}>
              Workspace
            </Button>
            <Button sx={{ color: "white", fontWeight: "bold" }}>
              Profile
            </Button>
          </Box>
        </Toolbar>
    </AppBar>
  ```
### Task 4 - Design login page (homework)
Starting point of Lab 2
```
git switch --force task-4
```
### Task 5 - Setup

- Install few dependencies
  - `redux-thunk` - The word "thunk" is a programming term that means "a piece of code that does some delayed work". Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.
  - `react-toastify` - Notification
  - `axios` - Make "XMLHttpRequests" from the browser - Supports the "Promise" API - Automatic transforms for "JSON" data
  ```
  npm install --save redux-thunk react-toastify axios
  ```

- Configure `react-toastify`
  - Update `App.js`
    ```
    <ToastContainer />
    ```

- Use of environment variables
  - Create file `.env` in root 
  - Remember not to commit this file so add it on gitignore
    ```
    PORT=3001
    REACT_APP_SERVER_BASE_URL=https://exquisite-moonbeam-806080.netlify.app/.netlify/functions
    ```

- Setup axios
  - Create file `lib/httpClient`
    ```
    import axios from 'axios';

    const httpClient = axios.create({
      baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    });

    httpClient.interceptors.request.use(config => {
      return config;
    });

    httpClient.interceptors.response.use(
      config => config,
      error =>  Promise.reject(error.response.data)
    );

    export default httpClient;
    ```

- Setup localStorage
  - Create file `lib/httpClient`
    ```
    const storage = {};

    storage.get = key => {
      const value = localStorage.getItem(key);
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    };

    storage.put = (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    };

    storage.remove = (key) => {
      localStorage.removeItem(key)
    };

    export default storage;
    ```
### Task 6 - Communicate with Server via RESTful APIs

- Create UserThunk
  - Create file `slices/user/UserThunk.js`
    ```
    import { createAsyncThunk } from "@reduxjs/toolkit";
    import httpClient from "../../../lib/httpClient";

    export const authenticateUser = createAsyncThunk(
      "user/auth",
      async ({ email, password }) => {
        let user = null;
        try {
          user = await httpClient.post("/user/auth", { email, password });
        } catch (e) {
          console.error(e);
        }
        console.log(user);
        return user;
      }
    );
    ```

- Use Toastify to show notificatio
- Update Login to validate user credentials
  - Update `Login.js`
    ```
    dispatch(
      authenticateUser({
        email,
        password,
      })
    )
      .then((response) => {
        const { payload } = response;

        if (!payload) {
          toast.error("Something went wrong! Try again later");
          return;
        }

        if (payload["status"] !== "SUCCESS") {
          toast.error(payload["message"]);
          return;
        }

        localStorage.setItem("token", payload["data"]["token"]);

        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
    ```

- Add extraReducers in Slice
  ```
    extraReducers: (builder) => {
      builder.addCase(authenticateUser.fulfilled, (state, action) => {
        state.authenticate.data = action.payload.data.token;
        state.authenticate.isFetching = false;
      });

      builder.addCase(authenticateUser.pending, (state) => {
        state.authenticate.isFetching = true;
      });
    },
  ```
### Task 7 - React State Management

- Add Route gaurd
  - Create file `guard/AuthGuard`
    ```
    import React from 'react';
    import { useSelector } from "react-redux";
    import { Navigate } from "react-router-dom";
    import LogoOnlyLayout from './../layouts/LogoOnlyLayout';

    const AuthGuard = ({ component: Component, auth, ...rest }) => {
        const { token, isValid} = useSelector((state) => state.user.authenticate)
        return (token === null || !isValid) ? <Navigate to="/home" /> : <LogoOnlyLayout/>;
    } 

    export default AuthGuard;
    ```
- Fetch User details using RESTful APIs
  ```
    const { details: user, isFetching } = useSelector(
    (state) => state.user.details
    );

    useEffect(() => {
      fetchUserDetails();
    }, []);
  ```
### Task 8 - Integrate Registration and Workspace APIs (homework)