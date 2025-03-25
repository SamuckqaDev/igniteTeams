import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  inline-size: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  inline-size: 46px;
  block-size: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
