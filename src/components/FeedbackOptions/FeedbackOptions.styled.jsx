import styled from "@emotion/styled";

export const Btn = styled.button`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.md};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  :hover, :focus {background-color: ${p => p.theme.colors.secondary};}
`