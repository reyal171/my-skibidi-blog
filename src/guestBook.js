import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import nineteeneightyfourbg from "./1984.jpg"

function GuestBook() {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [cooldown, setCooldown] = useState(false);
    const [allEntries, setAllEntries] = useState([]);
    const badwordbank = ["goldstein", "diary", "freedom", "winston", "down with big brother", "anti party", "anti-party", "anti big brother", "anti-big-brother", "hate", "rebel", "rebellion", "private", "privacy", "writing", "THE BOOK", "war with Eastasia", "allies with Eurasia"]
    const warningbank = ["WARNING, THOUGHTCRIME DETECTED⚠️‼️", "ALERT, BIG BROTHER IS WATCHING YOU⚠️‼️", "CAUTION, BIG BROTHER CAN SEE YOU THROUGH THE TELESCREEN⚠️‼️", "SUSPICIOUS ANTI-REVOLUTION INPUT DETECTED⚠️‼️", "DISLOYALTY RECORDED⚠️‼️", "THOUGHTCRIME REPORTED⚠️‼️", "FLAGGED FOR THOUGHTCRIME⚠️‼️", "REPORTED FOR SPREADING MISINFORMATION⚠️‼️"]

    async function fetchEntries() {
     const { data, error } = await supabase
       .from("guestbookEntriez2")
       .select("*")
        .order("id", { ascending: false });

        if (error) {
          console.log(error);
          } else {
          setAllEntries(data);
         }
    }

    async function addEntry() {
      fetchEntries(); // refresh list
      setCooldown(true);
        setTimeout(
          () => {
            setCooldown(false);
          }, 18000000
        )
           const hasthoughtcrime = badwordbank.some((word) => message.includes(word));

          if (hasthoughtcrime == true) {
            const pickwarning = warningbank[Math.floor(Math.random() * warningbank.length)];
            alert(pickwarning);
            return
          };

          if (message) {
            const { data, error } = await supabase
            .from("guestbookEntriez2")
            .insert([{ name: username, message: message }]);
          

            if (error) {
              console.log(error);
            } else {
                setUsername("");
                setMessage("");
            }
          }
    }
    return (
        <div>
            <h1 style={{fontFamily: "Comic Relief"}}>guestbook for signing your name and a message </h1>
            <h2 style={{fontFamily: "Comic Relief", color: "red"}}>BEWARER THERES A 5 HOUR COOLDOWN SO DONT SPAM YO</h2>
            <p>whats yo name below</p>
            <input style={{ width: '670px', height: '25px', fontSize: '20px' }} placeholder="ex: yayden" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <p>{username}</p>
            <p>what you wanna say below</p>
            <input style={{ width: '670px', height: '25px', fontSize: '20px' }} placeholder="ex: wsp yall..." value={message} onChange={(e) => setMessage(e.target.value)}/>
            <p>{message}</p>
            <button 
            onClick={addEntry}
            disabled={cooldown}
            >submit and see other entriez!!1</button>
            <ul>
             {allEntries.filter((
              entry) => (entry.message) 
             ).map((entry) => (
              <li key={entry.id}>
                  <b>{entry.name}</b>: {entry.message}
               </li>
               ))}
            </ul>
            <img src={nineteeneightyfourbg} height="150px" width="700px"></img>
            <img src={nineteeneightyfourbg} height="150px" width="700px"></img>
            <img src={nineteeneightyfourbg} height="150px" width="700px"></img>
            <img src={nineteeneightyfourbg} height="150px" width="700px"></img>
        </div>
    )
}

export default GuestBook;