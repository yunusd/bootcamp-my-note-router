import { useHistory } from "react-router"

const style = {
    cursor: 'pointer',
}

const containerStyle = {
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#f3f3f3',
}

const NoteListItem = ({data, handleRemove}) => {
    const history = useHistory();

    return (
        <div style={containerStyle}>
            <span style={style} onClick={() => handleRemove(data.id)}>delete</span> <br /> 
            <p style={style} onClick={() => history.push('/notes/' + data.id)}>
                {data.content}
            </p>
        </div>
    )
}

export default NoteListItem;