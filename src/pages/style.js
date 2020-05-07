import styled from 'styled-components/native'

export const Post = styled.View `
    margin-bottom: 15px;
`
export const Header = styled.View `
    padding: 10px;
    flex-direction: row;
    align-items: center;
`

export const  Avatar = styled.Image `
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 10px;
`
export const Name = styled.Text `
    color: #333;
    font-weight: bold;
`

export const PostImage = styled.Image `
    width: 100%;
    aspect-ratio: ${props => props.ratio};
`

export const Description = styled.Text `
    padding: 15px;
    line-height: 18px;
    margin-bottom: 10px;
`
export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999',
}) `
    margin: 10px 0 30px;
`
export const Buttons = styled.View `
    align-items: center;
    flex-direction: row;
    margin: 5px 10px 5px;
`
export const GroupButton = styled.View `
    align-items: center;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`