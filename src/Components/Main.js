import React from 'react'


import { useState } from "react"
import { SearchOutlined, RobotOutlined } from "@ant-design/icons";
import * as actionCreator from "../redux/action-creator"
import { useSelector, useDispatch } from "react-redux"
import { Switch, message } from "antd"

function Main() {
  const [inputvalue, setInputValue] = useState(null);
  const [showloader, setShowLoder] = useState(false)


  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state is", state.commonreducer.searchHistory)
  let prevsearch = state.commonreducer.searchHistory;
  const enablechat = state.commonreducer.enableChat
  const Mainstyle = {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    gap: "20px",
    padding: "20px",
    filter: showloader ? "blur(3px)" : "blur(0)"
  }

  const [result, setResult] = useState([]);
  const [id, setid] = useState();
  const generateresult = () => {
    if (inputvalue == null) {
      message.error("Please Write the question to ask first")
    } else {
      setShowLoder(true)
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: inputvalue,
          body: inputvalue,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          let obj = {
            question: inputvalue,
            ans: json
          }
          let prev = [obj, ...prevsearch];
          setInputValue(null)
          setid(Math.random())
          // prev.push(obj);
          // setResult(prev);
          dispatch(actionCreator.handleSearchHistory(prev));
          setShowLoder(false)


        }

        ).catch((err) => {
          message.error("Something Went Wrong")
        })
    }
  }
  let showdiv = localStorage.getItem("showdiv");
  return (




    <div>
    <div style={Mainstyle} >
    {/*
  <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
  <Switch checkedChildren="disable chat" unCheckedChildren="chat with bot" style={{backgroundColor:"rgb(99 228 218)"}} checked={enablechat?true:false} onChange={()=>{
     // setEnableChat(!enablechat)
      dispatch(actionCreator.setEnableChat(!enablechat))
  }} />
</div>*/}

    <div style={{ display: "flex", justifyContent: "center", padding: "15px 0", borderRadius: "14px", backgroundColor: "hsl(204, 67%, 42%)" }}>
      <textarea key={id} type="text" placeholder='Ask Anything....' style={{ width: "77%", height: "50px", border: "none", borderRadius: "6px", padding: "4px 6px" }} onChange={(e) => {
        setInputValue(e.target.value)

      }} value={inputvalue} />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 0 2px 6px" }} onClick={generateresult}> <SearchOutlined style={{ fontSize: "29px", color: "white", cursor: "pointer" }} /></div>
    </div>

    {prevsearch.length > 0 && <div style={{ color: "white", fontSize: "22px" }}>Search History</div>}


    {prevsearch.length > 0 && <div className='history-wrapper' style={{ display: "flex", maxHeight: "58vh", justifyContent: "center", padding: "15px 0", borderRadius: "14px", backgroundColor: "hsl(204, 67%, 42%)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "86%" }}>
        {prevsearch.map((ele) => {
          return (
            <div style={{ width: "100%" }}>
              <div style={{ height: "30px", background: "white", border: "none", borderRadius: "5px", display: "flex", padding: "0 8px", alignItems: "center" }}>{ele.question}</div>

              <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px", padding: "10px", color: "white" }}>
                <img src="/ai.png" style={{ height: "20px", width: "20px" }} />
                {ele.ans.body}</div>
            </div>


          )
        })}
      </div>
    </div>}


    
  </div>
  {
    showloader ? <div style={{ display: "flex", position: "absolute", top: "263px", justifyContent: "center" }}><img style={{ width: "40%", height: "40%", opacity: "0.8", borderRadius: "50%" }} src="https://sleepspace.com/wp-content/uploads/2021/10/doctorSnooze.gif" /></div> : null
  }
    </div>
    


  )
}

export default Main
