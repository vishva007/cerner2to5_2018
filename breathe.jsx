// There was a firefox tip that showed up - { Quick stress fix: Inhale for 3 counts and exhale for 4. This triggers your parasympathetic nervous system (which is a real thing) and helps you relax. #breathe } - this jsx code helps you do that
// cerner_2^5_2018
// Add this to your html to run this
// live code : https://s.codepen.io/AVT/debug/MqzvpO/bZAQWNGGpnNM
class App extends React.Component{
    constructor(props) {
    super(props);
    this.state = { seconds: 0, process : 'inhale' };
  }
  tick(){
    var s = this.state.seconds;
    var process = this.state.process;
    if (s == 3)
      process = 'exhale';
    if (s == 7)
    {process = 'inhale';s = 0;} 
    this.setState(state => ({
      seconds: s+1,
      process: process
    }));
  }  
  componentDidMount() {this.interval = setInterval(() => this.tick(), 1000);}
  render(){return(<div>{this.state.process}<br />{this.state.seconds}</div>);}
}
ReactDOM.render(<App />, root);