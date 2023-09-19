import styled from 'styled-components';

interface Props {
  position?: 'top' | 'bottom';
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}

export const StyledButtonGroup = styled.div<Props>`
  display: flex;
  align-items: center;

  button + button {
    margin-left: 4px;
  }

  ${({ position }) => (position === 'top' ? 'margin-bottom: 16px;' : '')}
  ${({ position }) => (position === 'bottom' ? 'margin-top: 16px;' : '')}

  ${({ align }) => (align === 'left' ? 'justify-content: flex-start;' : '')}
  ${({ align }) => (align === 'center' ? 'justify-content: center;' : '')}
  ${({ align }) => (align === 'right' ? 'justify-content: flex-end;' : '')}
`;

export const ButtonGroup = (props: Props) => {
  return <StyledButtonGroup {...props} />;
};
