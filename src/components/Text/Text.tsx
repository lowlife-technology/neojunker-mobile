import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { ReactNode } from 'react';

export interface TextProps extends RNTextProps {
  children: ReactNode;
}

export const Text = ({ children }: TextProps) => {
  return <RNText>{children}</RNText>;
};
