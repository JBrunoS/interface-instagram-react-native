import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Post, Header, Avatar, Name, PostImage, Description, Loading, Buttons, GroupButton} from './style'
import  Head from "../components/Header/index";
import Storys from '../components/Storys/index'

export default function Feed(){
    const [feed, setFeed] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)

    async function loadPage(pageNumber = page, shouldRefresh = false){

        if (total && pageNumber > total) {
            return
        }

        setLoading(true)

            const response = await fetch(`http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`)

            const data = await response.json();
            const totalItems = response.headers.get('X-Total-Count')

            setTotal(Math.floor(totalItems / 5));
            setFeed(shouldRefresh ? data : [...feed, ...data]);
            setPage(pageNumber + 1);

            setLoading(false)
        
    }

    useEffect(() => {
        loadPage();
    }, []);

    async function refreshList(){
        setRefreshing(true)

        await loadPage(4, true);

        setRefreshing(false)
    }

    return(
        <View>
            <Head />
            <FlatList
                ListHeaderComponent={Storys}
                data={feed}
                keyExtractor={post => String(post.id)}
                onEndReached={() => loadPage()}
                onEndReachedThreshold={0.2}
                onRefresh={refreshList}
                refreshing={refreshing}
                ListFooterComponent= {loading && <Loading />}
                renderItem={({item}) => (
                    <Post>
                        <Header>
                            <Avatar source={{ uri:item.author.avatar }} />
                            <Name>{item.author.name}</Name>
                        </Header>
                        <PostImage ratio={item.aspectRatio} source={{ uri: item.image }} />
                        <GroupButton>
                            <Buttons>
                                <Icon name="heart" size={30} color='#000' style={{ marginRight: 10}} />
                                <Icon name="message-circle" size={30} color='#000' style={{ marginRight: 10}} />
                                <Icon name="send" size={30} color='#000'  />
                            </Buttons>
                            <Buttons>
                                <Icon name="bookmark" size={30} color='#000' />
                            </Buttons>
                        </GroupButton>

                        <Description>
                            <Name>{item.author.name}</Name> {item.description}
                        </Description>
                    </Post>
                )}
            />
            
        </View>
    )
}