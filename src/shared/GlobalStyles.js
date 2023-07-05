import Constant from "./Constant"

const GlobalStyles = {
    wrapper: {
        flex: 1
    },
    alignMiddle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Constant.colors.bodyBg,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 20,
    },
    textInput: {
        // flex: 1,
        fontSize: 16,
        color: '#000',
    },
}

export default GlobalStyles