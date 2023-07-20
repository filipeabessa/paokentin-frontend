export interface CardActionProps {
  label: string;
  actionType: 'button' | 'link';
  action?: () => void;
  href?: string;
  className?: string;
  iconElement?: JSX.Element;
}

export interface CardProps {
  title?: string;
  subheader?: string;
  variant?: 'outlined' | 'elevation';
  actions?: CardActionProps[];
  elevation?: number;
  width?: string | object;
  expanded?: boolean;
}
