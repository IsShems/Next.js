import styled from "styled-components";
import { Colors } from "./Colors";

interface ButtonProps {
  width?: string;
}

export const BaseButton = styled.button<ButtonProps>`
  cursor: pointer;
  height: 50px;
  width: 250px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;

  font-size: 14px;
  font-weight: 400;
`;

export const PrimaryButton = styled(BaseButton)`
  background: ${Colors.gradient};
  color: ${Colors.white};
  border: none;
`;

export const OutlinedButton = styled(BaseButton)`
  background: transparent;
  color: ${Colors.aqua};
  border: 1px solid ${Colors.aqua};
`;
