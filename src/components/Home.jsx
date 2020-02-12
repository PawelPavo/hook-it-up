import React from 'react'



class Home extends React.Component {
    constructor() {
        super()
        const style = {
        textAlign: 'center'
        };
        this.state = {
            location: style,
            h1Text: ''
        }
    }

    handleMouseEnter = () => {
        const newStyle = {
            position: "relative",
            left: this.randomLocation(),
            top: this.randomLocation()
        };
        this.setState({ location: newStyle })
        this.setState({ h1Text: ' ' })

    }

    handleClick = () => {
        const newStyle = {
            textAlign: 'center'
        };
        this.setState({ location: newStyle })
        this.setState({ h1Text: 'YOU GOT ME' })
    }

    render() {
        return (
            <>
                <div
                    onMouseEnter={this.handleMouseEnter}
                    onMouseOut={this.handleMouseOut}
                    onClick={this.handleClick}
                    style={this.state.location}><img src="https://i.imgur.com/IBItATn.png" />
                    <h1>{this.state.h1Text}</h1>
                </div>
            </>
        )
    }

    randomLocation(offset) {
        return Math.floor(Math.random() * 768)
    }

}
export default Home