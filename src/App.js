import './App.css';
import { useEffect, useState } from 'react';
import Square from './square'
import { Patterns } from './patterns';
function App() {
  const [player_value, setPlayer_value] = useState(["", "", "", "", "", "", "", "", ""])
  const [value, setValue] = useState("🥔")
  const [color, setColor] = useState({
    border: "1px solid rgb(221, 144, 44)"
  })
  const [winner, setWinner] = useState({ name: "none", state: "none" })

  const change_value = (sq) => {
    console.log(sq)
    setPlayer_value(player_value.map((val, idx) => {
      console.log(val, idx)
      if (sq == idx && val == "") {
        return value;
      }
      return val;

    }))
    if (value == "🥔") {
      setValue("❌");
      setColor({
        border: "1px solid black",
      })

    }
    else {
      setValue("🥔");
      setColor({
        border: "1px solid RGB(181, 101, 167)",
      })
    }
  }
  useEffect(() => {
    check_win();
  }, [player_value])
  useEffect(() => {
    if (winner.state != "none") {
      alert(`${value} is the winner . Game finished`)
    }
  }, [winner])

  const check_win = () => {
    Patterns.forEach((patt) => {
      console.log(patt)
      console.log("anupam")
      const firstPlayer = player_value[patt[0]];
      if (firstPlayer=="") return;
      let winningPattern = true;
      console.log(firstPlayer + "hell no");
      patt.forEach((idx) => {
        if (player_value[idx] != firstPlayer) {
          winningPattern = false;
        }
      });
      if (winningPattern) {
        setWinner({ name: value, state: "won" });
      }
    });
  }
  check_win()
  return (
    <div className="App">
      <h2>🥔❌ GAME:</h2>
      <br />
      <br />
      <br />
      <br />
      {/* <h3 style={{textAlign:"center",marginTop:"20px"}}>{name1} VS {name2} :</h3> */}


      <div className="game-box" >

        <div>
          <button>single player</button>
          <button>Multi player</button>
        </div>


        <div className="graphic_board" style={color} >

          <div className="row">
            <Square value={player_value[0]} change_value={() => change_value(0)} color={color} />
            <Square value={player_value[1]} change_value={() => change_value(1)} color={color} />
            <Square value={player_value[2]} change_value={() => change_value(2)} color={color} />
          </div>
          <div class="row">
            <Square value={player_value[3]} change_value={() => change_value(3)} color={color} />
            <Square value={player_value[4]} change_value={() => change_value(4)} color={color} />
            <Square value={player_value[5]} change_value={() => change_value(5)} color={color} />
          </div>
          <div className="row">
            <Square value={player_value[6]} change_value={() => change_value(6)} color={color} />
            <Square value={player_value[7]} change_value={() => change_value(7)} color={color} />
            <Square value={player_value[8]} change_value={() => change_value(8)} color={color} />
          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
