const UserGreeting = ( props ) => {
    const greetingMessage = <>
                            <p>Welcome {props.name}</p>
                            </>
    const loggedOutMessage = <>
                             <p>Please login first</p>
                             </>
    return props.isLoggedIn ? greetingMessage : loggedOutMessage;
}
UserGreeting.defaultProps = {
    name: 'Mr Guest',
    isLoggedIn: false
}
export default UserGreeting;