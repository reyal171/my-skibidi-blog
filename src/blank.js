import React from "react";

export default function FlexPlayground() {
    return (
        // <div style={{backgroundColor: "lime", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "1"}}>
        //     <div style={{backgroundColor: "cyan", borderRadius: "12px", padding: "5px", width: "350px", textAlign: "center", boxShadow: "0 2px 6px rgba(0,0,0,1)"}}>
        //         "Live as if you were to die tomorrow. Learn as if you were to live forever." — Mahatma Gandhi 
        //     </div>
        //     <div style={{backgroundColor: "hotpink", borderRadius: "12px", padding: "5px", width: "350px", textAlign: "center", boxShadow: "0 2px 6px rgba(0,0,0,1)"}}>
        //         "Live as if you were to die tomorrow. Learn as if you were to live forever." — Mahatma Gandhi 
        //     </div>
        //     <div style={{backgroundColor: "cornflowerblue", borderRadius: "12px", padding: "5px", width: "350px", textAlign: "center", boxShadow: "0 2px 6px rgba(0,0,0,1)"}}>
        //         "Live as if you were to die tomorrow. Learn as if you were to live forever." — Mahatma Gandhi 
        //     </div>
        //     <div style={{backgroundColor: "crimson", borderRadius: "12px", padding: "5px", width: "350px", textAlign: "center", boxShadow: "0 2px 6px rgba(0,0,0,1)"}}>
        //         "Live as if you were to die tomorrow. Learn as if you were to live forever." — Mahatma Gandhi 
        //     </div>
        //     <div style={{backgroundColor: "aliceblue", borderRadius: "12px", padding: "5px", width: "350px", textAlign: "center", boxShadow: "0 2px 6px rgba(0,0,0,1)"}}>
        //         "Live as if you were to die tomorrow. Learn as if you were to live forever." — Mahatma Gandhi 
        //     </div>
        // </div>
        <div style={{backgroundColor: "lime", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", gridTemplateRows: "200px 100px"}}>
            <div style={{backgroundColor: "cyan", borderRadius: "12px", padding: "5px", width: "350px", textAlign: "center", boxShadow: "0 2px 6px rgba(0,0,0,1)", gridColumn: "2", gridRow: "2"}}>
                "Live as if you were to die tomorrow. Learn as if you were to live forever." — Mahatma Gandhi 
            </div>
            <div style={{backgroundColor: "hotpink", borderRadius: "12px", padding: "5px", width: "350px", textAlign: "center", boxShadow: "0 2px 6px rgba(0,0,0,1)"}}>
                "Live as if you were to die tomorrow. Learn as if you were to live forever." — Mahatma Gandhi 
            </div>
            <div style={{backgroundColor: "cornflowerblue", borderRadius: "12px", padding: "5px", width: "350px", textAlign: "center", boxShadow: "0 2px 6px rgba(0,0,0,1)"}}>
                "Live as if you were to die tomorrow. Learn as if you were to live forever." — Mahatma Gandhi 
            </div>
            <div style={{backgroundColor: "crimson", borderRadius: "12px", padding: "5px", width: "350px", textAlign: "center", boxShadow: "0 2px 6px rgba(0,0,0,1)"}}>
                "Live as if you were to die tomorrow. Learn as if you were to live forever." — Mahatma Gandhi 
            </div>
            <div style={{backgroundColor: "aliceblue", borderRadius: "12px", padding: "5px", width: "350px", textAlign: "center", boxShadow: "0 2px 6px rgba(0,0,0,1)"}}>
                "Live as if you were to die tomorrow. Learn as if you were to live forever." — Mahatma Gandhi 
            </div>
        </div>
    )
}
