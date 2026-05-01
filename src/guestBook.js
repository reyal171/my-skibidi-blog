import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

function GuestBook() {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [cooldown, setCooldown] = useState(false);
    const [allEntries, setAllEntries] = useState([]);

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
            <h1>guestbook for signing your name and a message </h1>
            <h2>BEWARER THERES A 5 HOUR COOLDOWN SO DONT SPAM YO</h2>
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
        </div>
    )
}

export default GuestBook;