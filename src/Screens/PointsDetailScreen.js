import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'

function PointsDetailScreen(props) {

    const { matches } = props?.route?.params?.item
    console.log('propsItem', props.route.params.item.name)


    const __renderList = ({ item }) => {
        return (
            <TouchableOpacity style={[styles.listContainer, { backgroundColor: item.bg }]} onPress={() => props.navigation.navigate('PointsDetailScreen', { item: item })}>
                <Text style={styles.titleStyle}>{item.name}</Text>

                <Text style={styles.scoreStyle}>{item.scoreRange}</Text>
                <Text style={styles.usernameStyle}>{item.user}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Text onPress={() => props.navigation.goBack()}>{'Back'}</Text>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.route.params.item.name}</Text>
                </View>
            </View>
            {/* <Text>{item.name}</Text> */}
            <View style={styles.innerView}>
                <Text>Matches</Text>
            </View>
            <FlatList data={matches}
                keyExtractor={(item) => item.id}
                renderItem={__renderList}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 23,
    },
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    innerView: {
        padding: 15
    },
    titleStyle: {
        marginLeft: 20
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    scoreContainer: {
        flex: 1,
        alignItems: "flex-end",
        marginRight: 30,

    },
    usernameStyle: {
        fontSize: 18,
        marginRight: 10
    }
})

export default PointsDetailScreen
