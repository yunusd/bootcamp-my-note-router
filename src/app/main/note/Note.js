import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getNote } from "../../../@fake-db/notesDB";
import PageLayout from "../../shared-components/page-layout";

const Notes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [note, setNote] = useState(null);
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        if(!note) setNote(getNote(id));
        setIsLoading(false)
    }, [note, id])


    if (isLoading) return <div>loading</div>
    if (!note) return <div>Not Found, <span onClick={() => history.push('/')}>GO HOME</span></div>

    return (
        <PageLayout header={<h1>Note Detail</h1>} content={<p>{note.content}</p>}/>
    )
}

export default Notes;