import styled from '@emotion/styled';

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`;

export const AddContactBtn = styled.button`
  margin-top: 10px;
  font-weight: 700;
  cursor: pointer;
  padding: 5px;
  width: 100px;
  :hover {
    background-color: aquamarine;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const FormInput = styled.input`
  width: 300px;
  font-size: 16px;
  padding: 5px;
`;
