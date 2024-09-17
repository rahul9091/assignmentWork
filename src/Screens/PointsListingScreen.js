import React from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { pointsListingJSON } from '../Utility/Utils'

function PointsListingScreen(props) {

    const __renderList = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listContainer} onPress={() => props.navigation.navigate('PointsDetailScreen', { item: item })}>
                <Image source={{ uri: item.img }} style={{ height: 50, width: 50 }} />
                <Text style={styles.titleStyle}>{item.name}</Text>

                <View style={styles.scoreContainer}>
                    <Text style={styles.scoreStyle}>{item.score}</Text>
                </View>
                <View style={styles.line} />
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.innerView}>
                <Text>Points Table</Text>
            </View>
            <FlatList data={pointsListingJSON}
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
        paddingVertical: 10,
        marginLeft: 10
    },
    container: {
        backgroundColor: 'white',
    },
    innerView: {
        padding: 15
    },
    titleStyle: {
        marginLeft: 20
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    },
    scoreContainer: {
        flex: 1,
        alignItems: "flex-end",
        marginRight: 30,

    },
    scoreStyle: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default PointsListingScreen
