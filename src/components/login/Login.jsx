import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { login } from "../../features/slices/authSlice";

const Login = () => {
    const initalState = {
        name: "",
        password: "",
    };
    const [values, setValues] = useState(initalState);
    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    const dispatch = useDispatch();
    return (
        <div className="grid grid-cols-1 justify-items-center items-center h-screen">
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="green"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input
                        label="Name"
                        size="lg"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                    />
                    <Input
                        label="Password"
                        size="lg"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                    <div className="-ml-2.5"></div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" color="green" fullWidth onClick={() => dispatch(login(values))}>
                        Sign In
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don&apos;t have an account?
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            color="green"
                            className="ml-1 font-bold"
                        >
                            Sign up
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;
