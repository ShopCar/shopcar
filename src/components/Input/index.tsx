import { useState } from "react";

import {
    Input,
    Button,
    FormLabel,
    InputGroup,
    FormControl,
    FormErrorMessage,
    InputRightElement,
    useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { iInputProps } from "../../types/compoments";

const InputForm = ({
    id,
    type,
    label,
    value,
    error,
    register,
    placeholder,
    readOnly,
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
                    <FormLabel color={useColorModeValue("grey.1", "white")}>
                        {label}
                    </FormLabel>
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
                    <FormLabel color={useColorModeValue("grey.1", "white")}>
                        {label}
                    </FormLabel>
                    <Input
                        value={value && value}
                        readOnly={readOnly ? readOnly : false}
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
