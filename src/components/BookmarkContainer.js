import React, { useEffect, useState } from 'react'
import axios from 'axios'



const BookmarkContainer = () => {
    
    const [title,settitle] = useState("")
    const [url,setURL] = useState("")
    const [list,setList] = useState([])

    const fetchList = async() => {
        const {data} = await axios.get('/.netlify/functions/getBookmarks')
        setList(data.data)
    }

    useEffect(() => {
        fetchList()
    },[])

    return (
        <div>
            <input style={{background: "transparent", padding: "7px 25px", borderRadius: "5px", border: "1px solid gray"}} placeholder="Title" value={title} onChange={e => settitle(e.target.value)} />
            <input style={{margin: "0 0 20px 20px",background: "transparent", padding: "7px 25px", borderRadius: "5px",border: "1px solid gray"}} placeholder="https://www.abc.com" value={url} onChange={e => setURL(e.target.value)} />
            <span style={{marginLeft: "20px"}}><button onClick={async() => {
                await axios.post('/.netlify/functions/createBookmark',{
                    data: {
                        title,
                        url
                    }
                })
                settitle("")
                setURL("")
                fetchList()
            }}>Bookmark</button></span>
            <div style={{ overflowY: "scroll", height: "300px", width: "41%"}}>
            {list && list.map((l) => (
                <div style={{border: "1px solid", width: "97%", margin: "10px 0"}} key={l._id}>
                <div style={{float: "right",marginRight: "10px", cursor: "pointer"}} onClick={async() => {
                    await axios.delete('/.netlify/functions/deleteBookmark',{
                    data: {
                        id: l._id
                    }
                })
                settitle("")
                setURL("")

                fetchList()
                }}>X</div>
                    <li style={{listStyleType: "none"}}>Title: {l.title}</li>
                    <li style={{listStyleType: "none"}}>URL: <a href={l.url} target="_blank" sytle={{cursor: "pointer"}}>{l.url}</a></li>
                </div>
            ))}
            </div>
        </div>
    )
}

export default BookmarkContainer
