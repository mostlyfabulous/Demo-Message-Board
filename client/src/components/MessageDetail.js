import React from 'react';

class MessageDetail extends React.Component {
  render() {
    const msg = this.props.message;
    console.log(msg);
    return <div>
      <h3 id="instruction">Detailed Message View</h3>
      <table>
      <thead>
        <tr><th>Message ID</th><th>Message Contents</th><th>UTC Timestamp</th></tr>
        </thead>
        <tbody>
        <tr><td>{msg.id}</td><td>{msg.text}</td><td>{msg.timestamp}</td>
        </tr>
        </tbody>
      </table>
    </div>
  }
}

export default MessageDetail;
