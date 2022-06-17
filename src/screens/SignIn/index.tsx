import React from 'react';
import {
  Box,
  Button,
  Center,
  IconButton,
  Input,
  KeyboardAvoidingView,
  Text,
  useTheme,
  View,
  WarningIcon,
  WarningTwoIcon,
} from 'native-base';
import { useSignIn } from './hook';
import { WHAT_ENV } from 'react-native-dotenv';

export default function SignIn(): JSX.Element {
  const { hidePassword, offsetKeyboard, onToggleHidePassword, goToHome, goToSignUp } = useSignIn();
  const { colors } = useTheme();

  return (
    <Box safeArea flex={1} testID="signin-screen">
      <KeyboardAvoidingView flex={1} keyboardVerticalOffset={offsetKeyboard}>
        <Center flex={1} px={10}>
          <Text fontSize={'3xl'} color={'blue.500'} mb={50}>
            SignIn
          </Text>
          <Text fontSize={'3xl'} color={'blue.500'} mb={50}>
            {WHAT_ENV}
          </Text>
          <Input
            p={4}
            placeholder="Type Email"
            keyboardType="email-address"
            mb="10"
            testID="input-email"
          />
          <Input
            p={4}
            placeholder="Type Password"
            secureTextEntry={hidePassword}
            mb="10"
            testID="input-password"
            InputRightElement={
              <IconButton
                testID="hide-password"
                onPress={onToggleHidePassword}
                icon={
                  hidePassword ? (
                    <WarningIcon
                      name={'warning-1'}
                      color={colors.black}
                      size={6}
                      testID="icon-hide"
                    />
                  ) : (
                    <WarningTwoIcon
                      name={'warning-2'}
                      color={colors.black}
                      size={6}
                      testID="icon-show"
                    />
                  )
                }
              />
            }
          />
          <Button onPress={goToHome} variant={'solid'} size={'lg'} testID="btn-submit">
            Login
          </Button>
          <View flexDirection={'row'} mt={30}>
            <Text fontSize={'md'} color={'blue.500'} mr={1}>
              Don't have account?
            </Text>
            <Text fontSize={'md'} color={'blue.500'} onPress={goToSignUp} testID="btn-signup">
              Register
            </Text>
          </View>
        </Center>
      </KeyboardAvoidingView>
    </Box>
  );
}
