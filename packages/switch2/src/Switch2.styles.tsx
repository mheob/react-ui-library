import styled from '@emotion/styled'

export const Wrapper = styled.div<{
  isChecked: boolean
  isDisabled: boolean
}>`
  width: 30px;
  height: 14px;
  background-color: ${({ isChecked }) => (isChecked ? '#0299a2' : '#CBCBCB')};
  border-radius: 7px;
  cursor: pointer;
  opacity: ${({ isDisabled }) => (isDisabled ? '0.4' : '1')};
  transition: background-color 200ms ease-in-out;
`

export const Pin = styled.div<{ isChecked: boolean }>`
  float: ${({ isChecked }) => (isChecked ? 'right' : 'left')};
  width: 20px;
  height: 20px;
  margin-top: -3px;
  background-color: #ddd;
  border-radius: 30px;
  box-shadow: 0px 1px 3px #00000029;
  transition: float 500ms ease-in-out;
`
