import { Box, Button, Center, Input, KeyboardAvoidingView, Text } from 'native-base';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Controller } from 'react-hook-form';
import { useSignUp } from './hook';

export default function SignUp(): JSX.Element {
  const { hidePassword, offsetKeyboard, onSubmit, form } = useSignUp();

  return (
    <Box safeArea flex={1}>
      <KeyboardAvoidingView flex={1} keyboardVerticalOffset={offsetKeyboard}>
        <Center flex={1} px={10}>
          <Text fontSize={'3xl'} color={'blue.500'} mb={50}>
            SignUp
          </Text>
          <Controller
            control={form.control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                placeholder="Type Name"
                mb="5"
                testID="input-name"
              />
            )}
            name="name"
            rules={{ required: 'Field is required', minLength: 3 }}
            defaultValue=""
          />
          <Controller
            control={form.control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                placeholder="Type Phone"
                keyboardType="phone-pad"
                mb="5"
                testID="input-phone"
              />
            )}
            name="phone"
            rules={{ required: 'Field is required', minLength: 3 }}
            defaultValue=""
          />
          <Controller
            control={form.control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                placeholder="Type Email"
                keyboardType="email-address"
                mb="5"
                testID="input-email"
              />
            )}
            name="email"
            rules={{ required: 'Field is required', minLength: 3 }}
            defaultValue=""
          />
          <Controller
            control={form.control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                secureTextEntry={hidePassword}
                placeholder="Type Password"
                mb="5"
                testID="input-password"
              />
            )}
            name="password"
            rules={{ required: 'Field is required', minLength: 3 }}
            defaultValue=""
          />
          <Controller
            control={form.control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                secureTextEntry={hidePassword}
                placeholder="Type Password Confimation"
                mb="5"
                testID="input-password-confirmation"
              />
            )}
            name="passwordConfirmation"
            rules={{ required: 'Field is required', minLength: 3 }}
            defaultValue=""
          />

          <Button
            onPress={form.handleSubmit(onSubmit)}
            variant={'solid'}
            size={'lg'}
            testID="btn-submit"
          >
            Submit
          </Button>
        </Center>
      </KeyboardAvoidingView>
    </Box>
  );
}
