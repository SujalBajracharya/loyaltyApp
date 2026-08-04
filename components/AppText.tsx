// components/AppText.tsx
import { Text, TextProps } from 'react-native';
import { theme } from '@/constants/theme';

interface AppTextProps extends TextProps {
  variant?: 'regular' | 'medium' | 'bold';
  size?: 'l' | 'm' | 's';
  color?: 'primary' | 'textDark' | 'textLight';
}

export function AppText({ 
  variant = 'regular', 
  size = 'm', 
  color = 'textDark', 
  style, 
  ...props 
}: AppTextProps) {
  
  return (
    <Text 
      style={[
        { 
          fontFamily: theme.fonts[variant], 
          fontSize: theme.sizes[size], 
          color: theme.colors[color] 
        }, 
        style
      ]} 
      {...props} 
    />
  );
}

export default AppText;