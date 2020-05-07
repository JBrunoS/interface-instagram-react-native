import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import logo from '../../assets/instagram.png'
import {Head, Image, Text} from './style';

export default function Header(){
    return(
        <Head>
            <Text><Icon name='camera' size={25} color="#000" /></Text>
            <Image source={logo} />
            <Text><Icon name='send' size={25} color='#000' /></Text>

        </Head>
    )
}