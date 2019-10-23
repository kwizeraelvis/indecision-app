class VisibiltyToggle extends React.Component{
    constructor(props){
        super(props);
        this.handelToggleVisibilty = this.handelToggleVisibilty.bind(this);
        this.state = {
            visibilty: true
        }
    }
    handelToggleVisibilty(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })

    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handelToggleVisibilty}>
                    {this.state.visibilty ? 'Hide Details' : 'Show details'}
                </button>
                {this.state.visibilty && (
                    <div>
                        <p>Hey, These are some details you can now see</p>
                    </div>
                )}
            </div>
        )
    }
}


ReactDOM.render(<VisibiltyToggle />, document.getElementById('app'));