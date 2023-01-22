/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  FormControl,
  FormErrorMessage,
  Text,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { IFormState, IInputHoverState } from '@/types/contact';
import * as S from './ContactForm.style';

interface IContactFormProps {
  formState: IFormState;
  isBlured: IInputHoverState;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: () => Promise<void>;
}

export function ContactForm({
  formState,
  isBlured,
  onChange,
  onBlur,
  onSubmit,
}: IContactFormProps) {
  const { values, error, isLoading } = formState;
  const inputFieldData = [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      isFocused: isBlured.name,
      value: values.name,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      isFocused: isBlured.email,
      value: values.email,
    },
    {
      name: 'subject',
      type: 'text',
      label: 'Subject',
      isFocused: isBlured.subject,
      value: values.subject,
    },
  ];

  return (
    <S.Container>
      <S.Wrapper>
        {error && (
          <Text color='red.300' my={4} fontSize='xl'>
            {error}
          </Text>
        )}

        {inputFieldData.map(({ name, type, label, isFocused, value }) => (
          <FormControl
            key={name}
            isRequired
            isInvalid={isFocused && !value}
            mb={5}
          >
            <FormLabel>{label}</FormLabel>
            <Input
              type={type}
              name={name}
              errorBorderColor='red.300'
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
        ))}

        <FormControl
          isRequired
          isInvalid={isBlured.message && !values.message}
          mb={5}
        >
          <FormLabel>Message</FormLabel>
          <Textarea
            name='message'
            rows={4}
            errorBorderColor='red.300'
            value={values.message}
            onChange={onChange}
            onBlur={onBlur}
            resize='none'
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <Button
          isLoading={isLoading}
          variant='outline'
          disabled={isLoading}
          onClick={onSubmit}
        >
          Send message!
        </Button>
      </S.Wrapper>
    </S.Container>
  );
}
