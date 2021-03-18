import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth, colors } from "../../config";

export const styles = StyleSheet.create({
    quote: {
        fontSize: 24,
        marginHorizontal: 20,
        marginTop: '35%',
        fontStyle: 'italic',
        color: colors.lightgrey
    },
    author: {
        fontSize: 16,
        marginTop: 10,
        color: colors.lightgrey,
        textAlign: 'right',
        width: deviceWidth,
        paddingRight: 20,
    }
});

export default styles