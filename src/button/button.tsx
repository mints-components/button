import styled from 'styled-components';

interface Props {
  type?: 'primary' | 'warning' | 'danger';
  children: React.ReactNode;
}

const BaseButton = styled.button`
  padding: 8px 16px;
  color: #292b3f;
  border: none;
  outline: none;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const PrimaryButton = styled(BaseButton)`
  color: #fff;
  background-color: #292b3f;

  &:hover {
    background-color: rgba(41, 43, 63, 0.6);
  }
`;

const WarningButton = styled(BaseButton)`
  color: #fff;
  background-color: #f4be55;

  &:hover {
    background-color: rgba(244, 190, 85, 0.6);
  }
`;

const DangerButton = styled(BaseButton)`
  color: #fff;
  background-color: #e34040;

  &:hover {
    background-color: rgba(227, 64, 64, 0.6);
  }
`;

export const Button = ({ type, ...props }: Props) => {
  if (type === 'primary') {
    return <PrimaryButton {...props} />;
  }

  if (type === 'warning') {
    return <WarningButton {...props} />;
  }

  if (type === 'danger') {
    return <DangerButton {...props} />;
  }

  return <BaseButton {...props} />;
};
