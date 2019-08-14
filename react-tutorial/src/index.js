/* jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square (props) {
  return (
    <button className='square'
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare (i) {
    return (<Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />
    );
  }

  render () {
    return (
      <div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    };
  }

  winner () {
    const squares = this.currentSquares();
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  currentSquares () {
    return this.state.history[this.state.history.length - 1].squares;
  }

  status () {
    const winner = this.winner();
    if (winner) {
      return 'Winner: ' + winner;
    } else {
      return 'Next player: ' + this.nextPlayer();
    }
  }

  handleClick (i) {
    if (this.winner() || this.currentSquares()[i]) {
      return;
    }
    const squares = this.currentSquares().slice();
    squares[i] = this.nextPlayer();
    this.setState({
      history: this.state.history.concat([{ squares: squares }]),
      xIsNext: !this.state.xIsNext
    });
  }

  nextPlayer () {
    return this.state.xIsNext ? 'X' : 'O';
  }

  render () {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board squares={this.currentSquares()}
            onClick={(i) => this.handleClick(i)} />
        </div>
        <div className='game-info'>
          <div>{this.status()}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
