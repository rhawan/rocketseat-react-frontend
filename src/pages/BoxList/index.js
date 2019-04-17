import React, { Component } from "react";
import api from "../../services/api";
import { distanceInWords } from "date-fns";
import pt from "date-fns/locale/pt";

import logo from "../../assets/logo.svg";
import "./styles.css";

export default class Box extends Component {
  state = {
    boxes: []
  };

  async componentDidMount() {
    const response = await api.get("boxes");

    this.setState({ boxes: response.data });
  }

  handleSelectBox = box => {
    console.log("selected box", box);
    this.props.history.push(`/box/${box}`);
  };

  render() {
    return (
      <div id="box-container">
        <header>
          <img src={logo} alt="" />
        </header>

        <ul>
          {this.state.boxes &&
            this.state.boxes.map(box => (
              <li key={box._id} onClick={this.handleSelectBox.bind(this, box._id)}>
                <strong>{box.title}</strong>
                <span>
                  há{" "}
                  {distanceInWords(box.createdAt, new Date(), {
                    locale: pt
                  })}
                </span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
