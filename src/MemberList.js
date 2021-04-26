// import "./MemberList.css";
import "./assets/MemberList.css";

import React, { useState } from "react";
import axios from "axios";

// console.log("this.state.member", this.state.member);

export const MemberList = () => {
  const [member, setMember] = useState([]);

  const getJson = () => {
    // const url = "https://api.myjson.com/bins/159wqn";
    // https://zipcloud.ibsnet.co.jp/api/search
    // const url = "https://zipcloud.ibsnet.co.jp/api/search?2700032";
    const url = "http://localhost:3000/member";

    axios.get(url).then((res) => {
      console.log("res.data", res.data);
      setMember(res.data);
    });
  };

  const memberList = (list) => {
    const memberList = list.map((member, index) => {
      return (
        <li key={index}>
          {member.name} {member.age}
        </li>
      );
    });
    return <ul>{memberList}</ul>;
  };

  return (
    <div>
      <button onClick={getJson}>Get Json</button>
      {memberList(member)}
    </div>
  );
};
