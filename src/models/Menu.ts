import {ReactNode} from 'react';

export interface MenuItem {
  key: string;
  title: string;
  icon: ReactNode;
  onPress?: () => void;
}
