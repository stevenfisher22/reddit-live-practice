import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

class Reddit extends React.Component {
    state = {
        posts: []
    };

    // FETCH API CALL
    componentDidMount() {
        fetch('https://www.reddit.com/r/aww.json')
            .then(res => res.json())
            .then(result => {
                const posts = result.data.children.map(obj => obj.data);
                this.setState({posts})
            })
    };

    // AXIOS API CALL
    // componentDidMount() {
    //     axios.get(`https://www.reddit.com/r/reactjs.json`)
    //     .then(res => {
    //         const posts = res.data.data.children.map(obj => obj.data);
    //         this.setState({posts})
    //     })
    // };

    render() {
        return (
            <div>
                <h1>/r/reactjs</h1>
                <ul>
                    {this.state.posts.map(post => (
                        <li key={post.id}>
                            <a href={post.url}>{post.title}</a>
                            <img src={post.url} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<Reddit />, document.querySelector('#root'))