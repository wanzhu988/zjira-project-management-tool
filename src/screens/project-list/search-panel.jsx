import { useEffect, useState } from "react"

export const SearchPanel = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [users, setUsers] = useState([])
    const [List, setList] = useState([])

    useEffect(() => {
        fetch('').then(async response => {
            if(response.ok){
                setList(await response.json())
            }
        })
    }, [param])
    return <form action="">
        <div>
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })}/>
            <select name={param.personId} onChange={evt => setParam({
                ...param,
                personId: evt.target.value
            })}>
            <option value="">负责人</option>
            {
                users.map(user => <option value={user.id}>{user.name}</option>)
            }
            </select>
        </div>
    </form>
}