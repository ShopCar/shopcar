import { useState } from "react";

import {
	Input,
	Button,
	FormLabel,
	InputGroup,
	FormControl,
	FormErrorMessage,
	InputRightElement
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { iInputProps } from "../../types/compoments";

const InputForm = ({
    id,
    type,
    label,
    error,
    register,
    placeholder,
}: iInputProps) => {
    const fieldError = error != undefined;
    const [showPassword, setShowPassword] = useState(false);

    const toShowPassword = () => {
        setShowPassword((showPassword) => !showPassword);
    };

    return (
        <>
            {type == "password" ? (
                <FormControl id={id} isInvalid={fieldError}>
                    <FormLabel color="grey.1">{label}</FormLabel>
                    <InputGroup>
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder={placeholder}
                            {...register}
                            h="48px"
                            pl="16px"
                            borderRadius="4px"
                            bg="none"
                        />
                        <InputRightElement h={"full"} pr="16px">
                            <Button variant={"ghost"} onClick={toShowPassword}>
                                {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {error && (
                        <FormErrorMessage as="p">
                            {error.message}
                        </FormErrorMessage>
                    )}
                </FormControl>
            ) : (
                <FormControl id={id} isInvalid={fieldError}>
                    <FormLabel color="grey.1">{label}</FormLabel>
                    <Input
                        type={type}
                        placeholder={placeholder}
                        {...register}
                        h="48px"
                        px="16px"
                        borderRadius="4px"
                        bg="none"
                    />
                    {error && (
                        <FormErrorMessage as="p">
                            {error.message}
                        </FormErrorMessage>
                    )}
                </FormControl>
            )}
        </>
    );
};

export default InputForm;
