interface ErrorMessageProps {
  children: string;
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <p>{children}</p>;
};
