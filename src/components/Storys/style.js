import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const BoxView = styled.View `
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: #8e8f90cf;
`

export const Box = styled.View `
    align-items: center;
    justify-content: center;
    margin: 10px 7px 10px;
`

export const Image = styled.Image `
    width: 60px;
    height: 60px;
    border-radius: 30px;
`

export const Name = styled.Text `
    font-size: 12px;
    align-self: center;
    margin: 0;
`
export const ImageStory = styled.Image `
     width: 60px;
    height: 60px;
    border-radius: 30px;
    
`
export const ButtonStory = styled.TouchableOpacity`
    position: absolute;
    top: 40px;
    left: 40px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: #488cce;
    border-color: #FFF;
    border-width: 2px;
`