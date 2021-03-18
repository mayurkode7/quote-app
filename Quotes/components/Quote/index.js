import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './styles'

function Quote(props) {
    return (
        <View>
            <Text style={styles.quote}>{props.quoteText}</Text>
            <Text style={styles.author}>  - {props.author} </Text>
        </View>
    )
}

Quote.propTypes = {
    quoteText: PropTypes.string,
    author: PropTypes.string
}

export default Quote

