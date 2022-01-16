import { forwardRef, ForwardRefRenderFunction } from "react";
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
    name:string;
    label?:string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) =>{
    return (
        <FormControl>
            <FormLabel htmlFor={name} id={name + label}>{label}</FormLabel>
            <ChakraInput
                id="email"
                name="email"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgColor: "gray.900"
                }}
                size="lg"
                ref={ref}
                {...rest}
            />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)