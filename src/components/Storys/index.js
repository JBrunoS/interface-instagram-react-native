import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'

import Icon from 'react-native-vector-icons/Feather'

import { BoxView, Box, Image, Name, ImageStory, ButtonStory } from './style'
import profile from '../../assets/profile.jpg'

export default function Story(){

    const [storys, setStorys] = useState([]);

    const StoryUser = 
    <Box>
    <ImageStory  source={profile} />
    <Name>Seu Story</Name>
    <ButtonStory><Icon name='plus' size={15} color='#FFF' /></ButtonStory>
    </Box>

    async function loadStorys(){
        const response = await fetch(`http://localhost:3000/authors`)

        const data = await response.json();

        setStorys(data);
    }

    useEffect(() => {
        loadStorys();
    }, []);
    return(
        <BoxView>  
             <FlatList
             ListHeaderComponent={StoryUser}
             horizontal
             showsHorizontalScrollIndicator={false}
             data={storys}
             keyExtractor={post => String(post.id)}
             renderItem={({item}) => (
                 <Box>
                     <Image source={{ uri:item.avatar }} />
                     <Name>{item.name}</Name>
                 </Box>
             )}
            />
        </BoxView>
    )
}