import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface iInputProps {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    error: FieldError | undefined;
    register: UseFormRegisterReturn<string>;
}
